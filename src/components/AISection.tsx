import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Users, Lightbulb, Target, Cog, TrendingUp } from 'lucide-react';

export default function AISection() {
  const aiProcess = [
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Discover",
      description: "We assess how people make decisions, where intelligence gaps exist, and why."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-green-600" />,
      title: "Design",
      description: "We define how AI supports human strengths through human-in-the-loop system design."
    },
    {
      icon: <Cog className="h-6 w-6 text-purple-600" />,
      title: "Develop",
      description: "We build and integrate data models, copilots, and decision-support tools."
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: "Deploy",
      description: "We implement solutions, train teams, and embed augmented workflows if needed."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-600" />,
      title: "Differentiate",
      description: "We continuously optimize Performance-driven Execution™ (PdE) through feedback loops and learning systems."
    }
  ];

  const engagementOptions = [
    {
      title: "AI+ Strategy Sprint",
      duration: "2–4 weeks",
      description: "Identify key augmentation opportunities and develop strategic roadmap.",
      features: ["Opportunity Assessment", "Strategic Planning", "Quick Wins Identification"]
    },
    {
      title: "AI+ Transformation Program",
      duration: "3–6 months",
      description: "Design and deploy tailored AI+ systems for your organization.",
      features: ["Custom AI+ Systems", "Implementation Support", "Team Training"]
    },
    {
      title: "AI+ Advisory Execution",
      duration: "Ongoing",
      description: "Continuous improvement, governance, and human-AI learning loops.",
      features: ["Continuous Optimization", "Governance Framework", "Learning Systems"]
    }
  ];

  const focusQuestions = [
    "What's happening in the marketplace?",
    "What must be done to stay different based on current existing conditions?",
    "What products and services are needed for the customer to improve their challenge and lay the groundwork for the Future-Picture?"
  ];

  return (
    <section id="ai" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">AI+ Framework</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Augmented Intelligence (AI+)
          </h2>
          <p className="text-2xl text-purple-600 font-semibold mb-4">
            Human-AI Synergy that Empowers People to Make Smarter and Faster Decisions
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our AI+ framework emphasizes collaboration between humans and machines, ensuring that 
            technology supports creativity, judgment, and empathy—not by replacing human expertise, 
            but by amplifying it.
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our AI+ Philosophy</h3>
              <p className="text-lg leading-relaxed mb-6">
                We focus on building systems where humans guide the AI, and AI enhances human capabilities. 
                This creates organizations that learn, adapt, and thrive together through "human-machine" collaborations.
              </p>
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8" />
                <span className="text-lg font-semibold">Intelligence is Shared</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Three Focus-Centric Questions:</h4>
              {focusQuestions.map((question, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm leading-relaxed">"{question}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI+ Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our 5-Step AI+ Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {aiProcess.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Engagement Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Engagement Options
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {engagementOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <Badge variant="outline">{option.duration}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Shape the Future-Picture
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Together, we can help shape the Future-Picture where intelligence is shared between people 
            and the systems they develop by changing performance to Performance-driven Execution™ (PdE) 
            through "The Productivity Exchange™."
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
            Start Your AI+ Journey
          </Button>
        </div>
      </div>
    </section>
  );
}