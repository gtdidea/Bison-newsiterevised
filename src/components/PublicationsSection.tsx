import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Users, TrendingUp } from 'lucide-react';

export default function PublicationsSection() {
  const upcomingBooks = [
    {
      title: "Triplicity in the Age of AI: the FOUR Horsemen of Disruptive Innovation",
      year: "2026",
      description: "Explore how AI transforms business operations through the lens of our proven FOUR Horsemen methodology.",
      category: "AI & Innovation"
    },
    {
      title: "The STRATEGY of Performance-driven Execution™ (PdE)—the Monograph",
      year: "2026",
      description: "A comprehensive guide to implementing Performance-driven Execution™ (PdE) across organizations of all sizes.",
      category: "Strategy & Execution"
    },
    {
      title: "Triplicity in the Age of AI Pocket Guide: Strategy that's DisRuptively Different Equals Innovation",
      year: "2026",
      description: "Practical strategies for creating breakthrough innovations that disrupt markets and drive growth.",
      category: "Innovation & Differentiation"
    },
    {
      title: "The Twisted Side of Leadership 2.0",
      year: "2027",
      description: "Uncover the complex challenges and opportunities in next-generation leadership approaches.",
      category: "Leadership"
    }
  ];

  const achievements = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "20+ Business Books",
      description: "Our founder and associates have authored over 20 business books that built our PdE system."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Proven Methodologies",
      description: "State-of-the-art strategy knowledge with distinctive data sets and gamification tools."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Industry Experts",
      description: "Deep bench of industry experts delivering bespoke strategic responses to any situation."
    }
  ];

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Thought Leadership</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Publications & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our founder and associates pioneered our business system and strategies through insights 
            and publications that gradually built our Performance-driven Execution™ (PdE) system.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Books */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Publications
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Check out our upcoming books to understand the solutions 
            and see how they can help your team and organization get better.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingBooks.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      {book.year}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">
                      {book.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {book.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Evolution Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Evolution</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Since our founding, we have evolved to meet the changing challenges our customers face—and 
              continue to face. We fuse state-of-the-art strategy knowledge with distinctive data sets, 
              gamification tools and resources tailored to meet our client and customer specific contexts.
            </p>
          </div>
        </div>

        {/* Expertise Statement */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Deep Industry Expertise
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            We have a deep bench of industry experts and whatever your situation, we will deliver 
            a bespoke strategic response. Our publications reflect decades of real-world experience 
            and proven methodologies.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Explore Our Methodologies
          </Button>
        </div>
      </div>
    </section>
  );
}