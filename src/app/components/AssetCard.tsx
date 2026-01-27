import { Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export interface Asset {
  id: string;
  name: string;
  description: string;
  image: string;
  owner: string;
  rentalFee: string;
  safetyBond: string;
  duration: string;
  location: string;
  available: boolean;
  ownerReputation: number;
}

interface AssetCardProps {
  asset: Asset;
  onRent: (asset: Asset) => void;
}

export function AssetCard({ asset, onRent }: AssetCardProps) {
  return (
    <div className="bg-black/40 border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/40 transition-all group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={asset.image}
          alt={asset.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          {asset.available ? (
            <Badge className="bg-green-500 text-black">Available</Badge>
          ) : (
            <Badge className="bg-gray-500 text-white">Rented</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{asset.name}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">{asset.description}</p>
        </div>

        {/* Owner Info */}
        <div className="flex items-center justify-between py-3 border-t border-b border-green-500/10">
          <div>
            <p className="text-xs text-gray-500 mb-1">Owner</p>
            <p className="text-sm text-green-400 font-mono">
              {asset.owner.slice(0, 6)}...{asset.owner.slice(-4)}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white font-semibold">{asset.ownerReputation}</span>
            <span className="text-xs text-gray-400">/100</span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Rental Fee</span>
            <span className="text-sm text-white font-semibold">{asset.rentalFee} ETH</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Safety Bond</span>
            <span className="text-sm text-white font-semibold">{asset.safetyBond} ETH</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {asset.duration}
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-3 h-3 mr-1" />
              {asset.location}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onRent(asset)}
          disabled={!asset.available}
          className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {asset.available ? "Rent Now" : "Currently Rented"}
        </Button>
      </div>
    </div>
  );
}
