import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Users, TrendingUp, Shield, Lightbulb } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Breakthrough Capabilities Create Breakthrough Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive solutions that transform organizations through strategic excellence, 
            operational efficiency, and innovative leadership development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Strategic Consulting */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Strategic Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Transform your organization with our proven strategic frameworks and execution methodologies.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strategic planning and alignment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Performance optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Change management
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* The RESIDS Program */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">The RESIDS℠ Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our flagship program that revolutionizes organizational performance through systematic excellence.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Results-driven methodology
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Systematic implementation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sustainable transformation
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Leadership Development */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Leadership 2.0</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Next-generation leadership development that prepares executives for the future of business.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Executive coaching
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Team development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cultural transformation
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technology Integration */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Augmented Intelligence (AI+)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Leverage cutting-edge AI and technology to amplify human capabilities and drive innovation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI strategy development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Process automation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Digital transformation
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Risk Management */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-xl">Risk & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive risk management and compliance solutions to protect and strengthen your organization.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Risk assessment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Compliance frameworks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Crisis management
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Innovation Consulting */}
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">Innovation & Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Drive sustainable growth through strategic innovation and market differentiation strategies.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Innovation strategy
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Market analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Growth planning
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Key Success Factors */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Key Success Factors</h3>
            <p className="text-xl text-muted-foreground">
              Proven methodologies that deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Protagonistic Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Proactive leadership and operational excellence through The FOUR Horsemen℠ System
                </p>
                <div className="text-sm text-gray-600">
                  Strategic positioning that anticipates market changes and drives competitive advantage
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Breakthrough Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Systematic implementation through The RESIDS℠ Program
                </p>
                <div className="text-sm text-gray-600">
                  Results-driven methodology that ensures consistent delivery and measurable outcomes
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Accelerated Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rapid scaling through The FAST-Galloping Ghost℠
                </p>
                <div className="text-sm text-gray-600">
                  Agile methodologies that accelerate growth while maintaining quality and sustainability
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}