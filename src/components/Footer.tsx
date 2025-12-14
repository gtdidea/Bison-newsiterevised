import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">The Bison Group</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              A consultancy that facilitates "Better-Best" concepts through Leadership 2.0, 
              Performance-driven Execution™ (PdE), and Augmented Intelligence (AI+) to catapult 
              process and forward-looking technology for improved results.
            </p>
            <p className="text-sm text-gray-400">
              Founded in 1996 • U.S.-based EdTech, DevOps, and SaaS with AI consulting services
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Next Level Strategy</li>
              <li>Continuous Transformation</li>
              <li>Augmented Intelligence (AI+)</li>
              <li>The RESIDS℠ Program</li>
              <li>The Axeus℠ Platform</li>
              <li>The ReVyve℠ App</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:support@thebisongroup.io" 
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>support@thebisongroup.io</span>
              </a>
              <a 
                href="https://linkedin.com/in/skipper" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn.com/in/skipper</span>
              </a>
            </div>
          </div>
        </div>

        {/* ReVyve App Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">The ReVyve℠ App</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              ReVyve℠ delivers personalized recovery plans, mainly for stroke and mental health patients, 
              powered by AI. The teams support men and women on their journey to restore their strength, 
              revitalize their confidence, and rebuild their independence—one milestone at a time.
            </p>
            <a 
              href="https://www.revyve.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              www.revyve.app
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DamianPitts, LLC | TheBisonGroup.io. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Performance-driven Execution™ (PdE)</span>
              <span className="text-gray-400 text-sm">The RESIDS℠ Program</span>
              <span className="text-gray-400 text-sm">The Axeus℠ Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}