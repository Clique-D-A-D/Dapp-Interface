import { Github, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-green-500/20 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">RentChain</h3>
                <p className="text-xs text-green-400">Decentralized Rentals</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              A decentralized peer-to-peer rental platform powered by smart contracts. 
              Built for student dormitories and small communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#marketplace" className="text-gray-400 hover:text-green-400 transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#my-rentals" className="text-gray-400 hover:text-green-400 transition-colors">
                  My Rentals
                </a>
              </li>
              <li>
                <a href="#my-listings" className="text-gray-400 hover:text-green-400 transition-colors">
                  My Listings
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Smart Contract
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2026 RentChain. Built for Decentralized Application Development Course.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
