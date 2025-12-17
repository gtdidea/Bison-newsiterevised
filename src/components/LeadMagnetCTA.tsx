import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Users, TrendingUp, Clock, Star } from 'lucide-react';
import LeadMagnetModal from './LeadMagnetModal';

export default function LeadMagnetCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#355E3B] text-[#969233] hover:bg-[#355E3B]/90">
                FREE Strategic Assessment
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Discover Your Organization's Hidden Strategic Potential
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Take our 2-minute Strategic Assessment Survey and receive a personalized report 
                with actionable insights tailored to your business challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="border-2 border-[#969233] shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <FileText className="mr-3 h-6 w-6 text-[#969233]" />
                      Your Personalized Strategic Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Industry-Specific Insights</h4>
                          <p className="text-sm text-muted-foreground">
                            Tailored recommendations based on your sector and challenges
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Organizational Assessment</h4>
                          <p className="text-sm text-muted-foreground">
                            Analysis of your team structure and operational efficiency
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-purple-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Strategic Roadmap</h4>
                          <p className="text-sm text-muted-foreground">
                            Step-by-step implementation guide for immediate impact
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Quick Implementation</h4>
                          <p className="text-sm text-muted-foreground">
                            Actionable steps you can start implementing today
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#355E3B]/20 rounded-full mb-4">
                    <FileText className="h-10 w-10 text-[#355E3B]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ready in 2 Minutes</h3>
                  <p className="text-muted-foreground mb-6">
                    Answer a few strategic questions about your business and receive 
                    immediate access to your personalized assessment report.
                  </p>
                </div>

                <Button
                  size="lg"
                  className="bg-[#355E3B] hover:bg-[#355E3B]/90 text-[#969233] px-8 py-4 text-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Start My Strategic Assessment
                </Button>
                
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>✓ No spam, ever  ✓ Instant download  ✓ 100% Free</p>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    Bonus: Complimentary Strategy Consultation
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Qualified participants receive a free 30-minute strategy session 
                    with our senior consultants (valued at $500)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#355E3B]">2,500+</div>
                  <div className="text-sm text-muted-foreground">Assessments Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#355E3B]">94%</div>
                  <div className="text-sm text-muted-foreground">Found Actionable Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#355E3B]">$2.3M</div>
                  <div className="text-sm text-muted-foreground">Average ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnetModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}