import { ArrowRight, Shield, Handshake, Clock, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description: "Connect your MetaMask or any Ethereum wallet. No signup or personal data required.",
      icon: <Shield className="w-8 h-8 text-green-400" />,
    },
    {
      number: "02",
      title: "Browse & Rent",
      description: "Find items you need. Deposit safety bond + rental fee to the smart contract.",
      icon: <Clock className="w-8 h-8 text-green-400" />,
    },
    {
      number: "03",
      title: "Mutual Confirmation",
      description: "Both parties confirm pickup through the DApp. Rental period begins automatically.",
      icon: <Handshake className="w-8 h-8 text-green-400" />,
    },
    {
      number: "04",
      title: "Return & Refund",
      description: "Return item on time. Smart contract refunds bond (minus rental fee) automatically.",
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, secure, and transparent process powered by blockchain smart contracts
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col md:flex-row items-start gap-6 bg-black/40 border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center border-2 border-green-500/30">
                    <span className="text-2xl font-bold text-green-400">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-lg">{step.description}</p>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-green-500/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-black/40 border border-green-500/20 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-2">No Identity Required</h4>
            <p className="text-sm text-gray-400">
              Your wallet address is your only identity. Complete privacy guaranteed.
            </p>
          </div>
          <div className="text-center p-6 bg-black/40 border border-green-500/20 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-2">Automatic Enforcement</h4>
            <p className="text-sm text-gray-400">
              Smart contracts handle all payments, refunds, and late fees automatically.
            </p>
          </div>
          <div className="text-center p-6 bg-black/40 border border-green-500/20 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-2">Community Reputation</h4>
            <p className="text-sm text-gray-400">
              Build trust through on-chain reputation tied to your wallet address.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
