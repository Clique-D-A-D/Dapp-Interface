import { Shield, Clock, Users, Lock } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface HeroSectionProps {
  onConnectWallet: () => void;
}

export function HeroSection({ onConnectWallet }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Rent Anything,
            <br />
            <span className="text-green-400">Trust Everything</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A decentralized peer-to-peer rental platform powered by smart contracts.
            No intermediaries. No identity verification. Just pure blockchain trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={onConnectWallet}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-black/40 border border-green-500/20 rounded-xl backdrop-blur-sm hover:border-green-500/40 transition-all">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Contract Security</h3>
            <p className="text-sm text-gray-400">
              Your funds are protected by automated smart contracts. No human intervention needed.
            </p>
          </div>

          <div className="p-6 bg-black/40 border border-green-500/20 rounded-xl backdrop-blur-sm hover:border-green-500/40 transition-all">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Collateral-Based Trust</h3>
            <p className="text-sm text-gray-400">
              Borrowers deposit safety bonds that are automatically returned upon successful rental.
            </p>
          </div>

          <div className="p-6 bg-black/40 border border-green-500/20 rounded-xl backdrop-blur-sm hover:border-green-500/40 transition-all">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Reputation System</h3>
            <p className="text-sm text-gray-400">
              Build trust in the community with a transparent, blockchain-based reputation score.
            </p>
          </div>

          <div className="p-6 bg-black/40 border border-green-500/20 rounded-xl backdrop-blur-sm hover:border-green-500/40 transition-all">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Automatic Returns</h3>
            <p className="text-sm text-gray-400">
              Late fees and refunds are calculated and processed automatically by the contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
