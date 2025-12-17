import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, FileText, Gift, Target, Zap, Users } from 'lucide-react';
import LeadMagnetModal from './LeadMagnetModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAssessmentClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        {/* Corner Banner - Fixed positioning and improved click handling */}
        <div className="fixed top-4 right-4 z-50">
          <div className="relative">
            <button
              onClick={handleAssessmentClick}
              className="bg-[#355E3B] text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 cursor-pointer border-2 border-[#969233] hover:shadow-xl active:scale-95"
            >
              <div className="flex items-center space-x-2">
                <Gift className="h-4 w-4" />
                <span className="font-bold text-sm">FREE Assessment</span>
              </div>
              <div className="text-xs opacity-90">Click here!</div>
            </button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-background-clean.jpg" 
            alt="Professional consultancy background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Strategic Assessment Announcement */}
            <div className="mb-8">
              <Badge className="mb-4 bg-[#355E3B] hover:bg-[#355E3B]/90 text-white px-4 py-2 text-sm font-semibold">
                🎯 NEW: Free Strategic Assessment Available
              </Badge>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-[#969233] mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Get Your Free Strategy Assessment</h3>
                </div>
                <p className="text-lg mb-4 text-gray-700">
                  Take our 2-minute Strategic Assessment Survey and receive a personalized strategy report tailored to your business challenges.
                </p>
                <Button
                  size="lg"
                  className="bg-[#355E3B] hover:bg-[#355E3B]/90 text-white px-8 py-3 text-lg font-semibold"
                  onClick={handleAssessmentClick}
                >
                  Start Free Assessment Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="mt-3 text-sm text-gray-600">
                  ✓ Instant results  ✓ No spam  ✓ Personalized insights
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              A Next Level Organization that develops 
              <span className="text-blue-600"> execution strategy</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              We facilitate "Better-Best" concepts to catapult process and forward-looking technology 
              for improved results through Leadership 2.0 and Performance-driven Execution™ (PdE)
            </p>

            {/* Key Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <Target className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-gray-800">Operational Excellence</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <Zap className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-gray-800">Augmented Intelligence</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-gray-800">Leadership 2.0</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToServices}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg"
              >
                Learn About RESIDS℠
              </Button>
            </div>

            {/* Company Tagline */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 italic">
                "Founded in 1996 • U.S.-based EdTech, DevOps, and SaaS with AI consulting services"
              </p>
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
