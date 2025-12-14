import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Recycle, Lightbulb, Zap, Settings } from 'lucide-react';

export default function ResidsSection() {
  const residsComponents = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Resolute Execution",
      description: "Provides strong, realistic strategies that lead to focused effort for motivated teams.",
      color: "blue"
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Sustainability",
      description: "Offers processes that evolve over time without losing their focus or momentum, only improving them.",
      color: "green"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Innovation",
      description: "Focused on affordability and accessibility for a broader population to incrementally improve operations on a predictable timeframe.",
      color: "yellow"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Disruptive Differentiation",
      description: "Creates a breakthrough that's DisRuptive and different to achieve new pathways.",
      color: "purple"
    },
    {
      icon: <Settings className="h-8 w-8 text-red-600" />,
      title: "Standardization",
      description: "Ensures the Wisdom of Three (3Ws) is aligned throughout the process to win key objectives—strategically and flawlessly.",
      color: "red"
    }
  ];

  const benefits = [
    "End-to-end RevOps process integration",
    "Optimized Operational Execution (OpEx)",
    "Strategic OKRs and KPIs implementation",
    "Enhanced project management and differentiation",
    "Risk mitigation and avoidance",
    "Increased productivity and efficiency",
    "Decision Intelligence (DI) capabilities"
  ];

  return (
    <section id="resids" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Flagship Program</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The RESIDS℠ Program
          </h2>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            Widespread Unstoppable Change for Operations—and Beyond!
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Software as a Service (SaaS) platform introduces next-level processes, Leadership 2.0, 
            and technology that establishes or improves an organization's functionalities.
          </p>
        </div>

        {/* RESIDS Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            The Five Pillars of RESIDS℠
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residsComponents.map((component, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {component.icon}
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Platform Capabilities
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Integrating RevOps processes end-to-end, the platform optimizes Operational Execution (OpEx) 
                using Objectives and Key Results (OKRs) and Key Performance Indicators (KPIs) strategically 
                and measurably to enhance project management and differentiation, while avoiding risk.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Why RESIDS℠ Matters</h4>
              <p className="mb-6 leading-relaxed">
                The RESIDS℠ Program is NOT a competitive advantage for growth—it's a necessity with 
                riveting actions. Organizations that master this initiative will determine the rules 
                to follow in their industry.
              </p>
              <blockquote className="border-l-4 border-white/30 pl-4 italic">
                "It's potentially more devastating to leaders and organizations that didn't pay attention to it."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">The Epidemic Effect</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            The RESIDS℠ Program explores how insights can spread like epidemics, reaching a point where 
            it becomes widespread and unstoppable. The more unexpected and actionable the idea is, 
            the smaller the number of competitors, and the more successful an organization becomes.
          </p>
          <Button className="mt-6 bg-white text-gray-900 hover:bg-gray-100">
            <a href="#about">Learn More About Implementation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}