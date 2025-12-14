import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Smartphone, Users, BarChart3, Zap, Target, Globe, CheckCircle } from 'lucide-react';

export default function AxeusSection() {
  const platformFeatures = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Mobile-First Design",
      description: "Access your productivity tools anywhere, anytime with our responsive mobile platform."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that bring teams together for maximum productivity."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Analytics Dashboard",
      description: "Real-time insights and analytics to track performance and optimize workflows."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Automation Tools",
      description: "Intelligent automation that streamlines repetitive tasks and processes."
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Goal Tracking",
      description: "Set, monitor, and achieve your objectives with our comprehensive goal management system."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Global Integration",
      description: "Connect with popular business tools and platforms for a unified workflow experience."
    }
  ];

  const benefits = [
    "Streamlined workflow management",
    "Enhanced team productivity",
    "Real-time performance tracking",
    "Automated task scheduling",
    "Cross-platform compatibility",
    "Advanced reporting capabilities",
    "Secure cloud-based storage"
  ];

  return (
    <section id="axeus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Innovation Platform</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Axeus℠ Platform & App
          </h2>
          <p className="text-2xl text-purple-600 font-semibold mb-4">
            Revolutionizing Productivity Through Innovation
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience next-generation productivity with our comprehensive platform that integrates 
            the 5-Ringz℠ Strategy for unprecedented organizational efficiency and growth.
          </p>
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platformFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  {feature.icon}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Showcase */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Platform Capabilities
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The platform delivers comprehensive productivity solutions that transform how teams work, 
                collaborate, and achieve their goals. Built on proven methodologies and cutting-edge technology.
              </p>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <a href="https://www.axeusplatform.app" target="_blank" rel="noopener noreferrer">
                    Visit the Axeus℠ Platform App
                  </a>
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">The Axeus℠ Platform</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your organization's productivity with our innovative platform that combines 
                strategic planning, execution excellence, and performance optimization in one unified solution.
              </p>
              <div className="bg-purple-100 rounded-lg p-4 mb-4">
                <p className="text-sm text-purple-800 font-medium">
                  🚀 Now Available: Visit the app here
                </p>
                <a 
                  href="https://www.axeusplatform.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 text-sm underline"
                >
                  www.axeusplatform.app
                </a>
              </div>
              <p className="text-xs text-gray-500">
                Experience the future of organizational productivity and strategic execution.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Benefits of the Axeus℠ Platform App</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            Our platform integrates strategic planning with operational excellence, delivering measurable 
            results through innovative technology and proven methodologies that drive sustainable growth.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Faster Goal Achievement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">User Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Productivity?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations already using the Axeus℠ Platform to achieve 
            breakthrough results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <a href="https://www.axeusplatform.app" target="_blank" rel="noopener noreferrer">
                Get Started Today
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              <a href="https://www.axeusplatform.app" target="_blank" rel="noopener noreferrer">
                Visit the Axeus℠ Platform App
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}