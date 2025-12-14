import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Calendar, Users, Target, Zap } from 'lucide-react';

export default function AboutSection() {
  const whyWorkWithUs = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Leadership 2.0",
      description: "Next-generation leadership approaches that move beyond traditional industry norms and geographical constraints."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Organizational Behavior (OB)",
      description: "Deep expertise in organizational behavior and improvement strategies with simultaneous pursuit of Disruptive Differentiation."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Disruptive Differentiation",
      description: "We help organizations become (re)purposed and different, creating measurable value and tangible outcomes."
    }
  ];

  const companyValues = [
    "Founded in 1996 with decades of proven experience",
    "U.S.-based EdTech, DevOps, and SaaS with AI consulting services",
    "Fusion of Gamification with professional consulting expertise",
    "Focus on smarter, faster, and more ethical decisions",
    "Human-machine collaborations that amplify expertise",
    "Remain nimble and move human ingenuity to the next-level"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-800">About Us</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Work With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We have learned over the years from our clients that people and organizations are not confined 
            to industry norms or geography. If you are looking for something (re)purposed, we are the firm for you!
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyWorkWithUs.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Philosophy */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Philosophy
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If we can't be a significant value to you, we'll let you know upfront; we're NOT your 
                average consulting firm. Led by our key strategies and platforms, they are designed and 
                developed to help people and organizations move beyond the next-level.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-6">
                "It always seems impossible until it is done! In building a great organization, there is 
                no single defining action, no grand program, no one killer innovation, no lucky break, 
                and no miracle moment. It's ONLY people and relentless process that's different."
              </blockquote>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Company Values</h4>
              <div className="space-y-3">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              We collaborate to focus on achieving smarter, faster, and more ethical decisions—not by 
              replacing human expertise, but by amplifying it through "human-machine" collaborations. 
              We have one simple objective: remain nimble and move human ingenuity to the next-level. 
              This is what we do every day.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <span>Get in Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Send us an email to learn more about our services. We would love to hear from you 
                and discuss how we can help your organization achieve Better-Best results.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <Mail className="h-4 w-4 mr-2" />
                support@thebisongroup.io
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Linkedin className="h-6 w-6 text-blue-600" />
                <span>Follow Our Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Follow us on LinkedIn where we post daily about improving your ideas and operations. 
                Get FREE advice that will help your organization thrive.
              </p>
              <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn.com/in/skipper
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Final Statement */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our firm is led by seasoned professionals who do everything to make existing conditions 
            experience Better-Best results—clients that want measurable value and tangible outcomes 
            to tailor customer experiences that start a new trend.
          </p>
        </div>
      </div>
    </section>
  );
}