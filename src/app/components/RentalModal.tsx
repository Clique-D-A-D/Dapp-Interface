import { X, AlertTriangle, Loader2 } from "lucide-react";
import { Asset } from "@/app/components/AssetCard";
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";

interface RentalModalProps {
  asset: Asset | null;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isProcessing: boolean;
}

export function RentalModal({ asset, open, onClose, onConfirm, isProcessing }: RentalModalProps) {
  if (!asset) return null;

  const totalCost = (parseFloat(asset.rentalFee) + parseFloat(asset.safetyBond)).toFixed(4);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black border-green-500/30 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Confirm Rental</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Asset Info */}
          <div className="flex gap-4">
            <img
              src={asset.image}
              alt={asset.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">{asset.name}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">{asset.description}</p>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-white">Payment Breakdown</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Rental Fee</span>
                <span className="text-white font-semibold">{asset.rentalFee} ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Safety Bond (Refundable)</span>
                <span className="text-white font-semibold">{asset.safetyBond} ETH</span>
              </div>
              <div className="border-t border-green-500/20 pt-2 flex justify-between">
                <span className="text-white font-semibold">Total to Lock</span>
                <span className="text-green-400 font-bold text-lg">{totalCost} ETH</span>
              </div>
            </div>
          </div>

          {/* Rental Details */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Duration</span>
              <span className="text-white">{asset.duration}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Location</span>
              <span className="text-white">{asset.location}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Owner</span>
              <span className="text-green-400 font-mono">
                {asset.owner.slice(0, 6)}...{asset.owner.slice(-4)}
              </span>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm space-y-2">
              <p className="text-yellow-400 font-semibold">Important Information</p>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>The total amount will be locked in the smart contract</li>
                <li>Both parties must confirm pickup for rental to start</li>
                <li>Safety bond will be refunded after successful return</li>
                <li>Late returns will incur automatic penalties</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={onConfirm}
              disabled={isProcessing}
              className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm & Pay"
              )}
            </Button>
            <Button
              onClick={onClose}
              disabled={isProcessing}
              variant="outline"
              className="flex-1 border-green-500/30 text-green-400 hover:bg-green-500/10"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
