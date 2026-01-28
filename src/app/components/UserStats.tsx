import { Shield, Star, TrendingUp, Award } from "lucide-react";
import { Progress } from "@/app/components/ui/progress";

interface UserStatsProps {
  walletAddress: string;
  reputation: number;
  totalRentals: number;
  successfulReturns: number;
  totalListed: number;
}

export function UserStats({ walletAddress, reputation, totalRentals, successfulReturns, totalListed }: UserStatsProps) {
  const successRate = totalRentals > 0 ? Math.round((successfulReturns / totalRentals) * 100) : 0;

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Your Profile</h3>
              <p className="text-green-400 font-mono text-sm">
                {walletAddress.slice(0, 10)}...{walletAddress.slice(-8)}
              </p>
            </div>
            
            {/* Reputation Score */}
            <div className="mt-4 md:mt-0 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-4xl font-bold text-green-400">{reputation}</span>
                <span className="text-gray-400 text-lg">/100</span>
              </div>
              <p className="text-sm text-gray-400">Reputation Score</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-black/40 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{totalRentals}</p>
              <p className="text-sm text-gray-400">Total Rentals</p>
            </div>

            <div className="bg-black/40 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{successfulReturns}</p>
              <p className="text-sm text-gray-400">Successful Returns</p>
            </div>

            <div className="bg-black/40 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{successRate}%</p>
              <p className="text-sm text-gray-400">Success Rate</p>
            </div>

            <div className="bg-black/40 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{totalListed}</p>
              <p className="text-sm text-gray-400">Items Listed</p>
            </div>
          </div>

          {/* Reputation Progress */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Reputation Progress</p>
              <p className="text-sm text-white font-semibold">{reputation}/100</p>
            </div>
            <Progress value={reputation} className="h-3" />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>New User</span>
              <span>Trusted Member</span>
              <span>Elite Member</span>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-green-500/5 border border-green-500/20 rounded-lg p-4">
            <p className="text-sm text-green-400 font-semibold mb-2">💡 Build Your Reputation</p>
            <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
              <li>Return items on time to increase your score</li>
              <li>Successful rentals boost your trustworthiness</li>
              <li>Higher reputation gives you access to premium items</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
