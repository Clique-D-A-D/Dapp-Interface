import { Wallet, Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";

interface NavbarProps {
  walletAddress: string | null;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
}

export function Navbar({ walletAddress, onConnectWallet, onDisconnectWallet }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-green-500/20 bg-black/50 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">RentChain</h1>
              <p className="text-xs text-green-400">Decentralized Rentals</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#marketplace" className="text-gray-300 hover:text-green-400 transition-colors">
              Marketplace
            </a>
            <a href="#my-rentals" className="text-gray-300 hover:text-green-400 transition-colors">
              My Rentals
            </a>
            <a href="#my-listings" className="text-gray-300 hover:text-green-400 transition-colors">
              My Listings
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors">
              How It Works
            </a>
          </div>

          {/* Wallet Connection */}
          <div className="hidden md:block">
            {walletAddress ? (
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-xs text-gray-400">Connected</p>
                  <p className="text-sm text-green-400 font-mono">
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </p>
                </div>
                <Button
                  onClick={onDisconnectWallet}
                  variant="outline"
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button
                onClick={onConnectWallet}
                className="bg-green-500 hover:bg-green-600 text-black font-semibold"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-green-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#marketplace" className="block text-gray-300 hover:text-green-400 transition-colors">
              Marketplace
            </a>
            <a href="#my-rentals" className="block text-gray-300 hover:text-green-400 transition-colors">
              My Rentals
            </a>
            <a href="#my-listings" className="block text-gray-300 hover:text-green-400 transition-colors">
              My Listings
            </a>
            <a href="#how-it-works" className="block text-gray-300 hover:text-green-400 transition-colors">
              How It Works
            </a>
            <div className="pt-4 border-t border-green-500/20">
              {walletAddress ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-xs text-gray-400">Connected</p>
                    <p className="text-sm text-green-400 font-mono">
                      {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </p>
                  </div>
                  <Button
                    onClick={onDisconnectWallet}
                    variant="outline"
                    className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
                  >
                    Disconnect
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={onConnectWallet}
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
