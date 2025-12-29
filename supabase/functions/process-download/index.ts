import { createClient } from 'npm:@supabase/supabase-js@2';
import { Resend } from 'npm:resend@4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface DownloadLeadData {
  name: string;
  email: string;
  phone: string;
  document_name: string;
  source: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    let leadData: DownloadLeadData;

    try {
      leadData = await req.json();
    } catch (jsonError) {
      console.error('Invalid JSON in request body:', jsonError);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid request format'
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.document_name) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, phone, or document_name'
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: downloadLead, error: dbError } = await supabase
      .from('download_leads')
      .insert({
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        document_name: leadData.document_name,
        source: leadData.source || 'unknown',
      })
      .select()
      .maybeSingle();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({
          success: false,
          error: `Database error: ${dbError.message}`
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!downloadLead) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Download lead was not created'
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const notificationEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2563eb;">New Document Download Lead</h1>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #1f2937;">Contact Information</h2>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong>Name:</strong> ${leadData.name}</li>
                <li style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></li>
                <li style="margin-bottom: 10px;"><strong>Phone:</strong> <a href="tel:${leadData.phone}">${leadData.phone}</a></li>
              </ul>
            </div>

            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #1f2937;">Download Details</h2>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong>Document:</strong> ${leadData.document_name}</li>
                <li style="margin-bottom: 10px;"><strong>Source:</strong> Blog post - ${leadData.source}</li>
                <li style="margin-bottom: 10px;"><strong>Download Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</li>
                <li style="margin-bottom: 10px;"><strong>Lead Source Label:</strong> <span style="background-color: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Downloaded: ${leadData.document_name}</span></li>
              </ul>
            </div>

            <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0;"><strong>⚡ Action Required:</strong> Follow up with this lead within 24 hours to maximize engagement opportunity.</p>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p style="color: #6b7280; font-size: 12px; text-align: center;">The Bison Group | Lead Capture System<br/>This notification was automatically generated from the website download system.</p>
          </div>
        `;

        await resend.emails.send({
          from: 'The Bison Group <noreply@thebisongroup.io>',
          to: 'support@thebisongroup.io',
          subject: `New Document Download: ${leadData.document_name} - ${leadData.name}`,
          html: notificationEmailHtml,
        });

      } catch (emailError) {
        console.error('Email sending failed, but lead was saved:', emailError);
      }
    } else {
      console.log('RESEND_API_KEY not configured. Lead saved but email not sent.');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Download lead captured successfully',
        leadId: downloadLead.id
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Unexpected error in process-download function:', error);

    const errorMessage = error instanceof Error
      ? error.message
      : 'An unexpected error occurred while processing your download request';

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
