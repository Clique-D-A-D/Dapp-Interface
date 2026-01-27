import { Clock, AlertCircle, CheckCircle, Package } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";

export interface Rental {
  id: string;
  assetName: string;
  assetImage: string;
  owner: string;
  borrower: string;
  rentalFee: string;
  safetyBond: string;
  startDate: Date;
  endDate: Date;
  status: "pending_pickup" | "active" | "pending_return" | "completed" | "overdue";
  pickupConfirmedByOwner: boolean;
  pickupConfirmedByBorrower: boolean;
  returnConfirmedByOwner: boolean;
}

interface RentalCardProps {
  rental: Rental;
  userAddress: string;
  onConfirmPickup?: (rentalId: string) => void;
  onConfirmReturn?: (rentalId: string) => void;
}

export function RentalCard({ rental, userAddress, onConfirmPickup, onConfirmReturn }: RentalCardProps) {
  const isOwner = rental.owner.toLowerCase() === userAddress.toLowerCase();
  const isBorrower = rental.borrower.toLowerCase() === userAddress.toLowerCase();
  
  const now = new Date();
  const totalDuration = rental.endDate.getTime() - rental.startDate.getTime();
  const elapsed = now.getTime() - rental.startDate.getTime();
  const progress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
  
  const daysRemaining = Math.ceil((rental.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  const getStatusInfo = () => {
    switch (rental.status) {
      case "pending_pickup":
        return {
          color: "bg-yellow-500",
          text: "Pending Pickup",
          icon: <Package className="w-4 h-4" />,
        };
      case "active":
        return {
          color: "bg-green-500",
          text: "Active",
          icon: <CheckCircle className="w-4 h-4" />,
        };
      case "pending_return":
        return {
          color: "bg-blue-500",
          text: "Pending Return",
          icon: <Clock className="w-4 h-4" />,
        };
      case "overdue":
        return {
          color: "bg-red-500",
          text: "Overdue",
          icon: <AlertCircle className="w-4 h-4" />,
        };
      case "completed":
        return {
          color: "bg-gray-500",
          text: "Completed",
          icon: <CheckCircle className="w-4 h-4" />,
        };
      default:
        return {
          color: "bg-gray-500",
          text: "Unknown",
          icon: <AlertCircle className="w-4 h-4" />,
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="bg-black/40 border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/40 transition-all">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-48 h-48 flex-shrink-0">
          <img
            src={rental.assetImage}
            alt={rental.assetName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{rental.assetName}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className={`${statusInfo.color} text-white`}>
                  {statusInfo.icon}
                  <span className="ml-1">{statusInfo.text}</span>
                </Badge>
                {isOwner && <Badge variant="outline" className="border-green-500/30 text-green-400">You are Owner</Badge>}
                {isBorrower && <Badge variant="outline" className="border-blue-500/30 text-blue-400">You are Borrower</Badge>}
              </div>
            </div>
          </div>

          {/* Parties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Owner</p>
              <p className="text-sm text-green-400 font-mono">
                {rental.owner.slice(0, 6)}...{rental.owner.slice(-4)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Borrower</p>
              <p className="text-sm text-blue-400 font-mono">
                {rental.borrower.slice(0, 6)}...{rental.borrower.slice(-4)}
              </p>
            </div>
          </div>

          {/* Financial Info */}
          <div className="flex gap-6 py-3 border-t border-b border-green-500/10">
            <div>
              <p className="text-xs text-gray-500 mb-1">Rental Fee</p>
              <p className="text-sm text-white font-semibold">{rental.rentalFee} ETH</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Safety Bond</p>
              <p className="text-sm text-white font-semibold">{rental.safetyBond} ETH</p>
            </div>
          </div>

          {/* Timeline */}
          {rental.status === "active" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Time Remaining</span>
                <span className={daysRemaining > 1 ? "text-white" : "text-red-400 font-semibold"}>
                  {daysRemaining > 0 ? `${daysRemaining} days` : "Overdue"}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{rental.startDate.toLocaleDateString()}</span>
                <span>{rental.endDate.toLocaleDateString()}</span>
              </div>
            </div>
          )}

          {/* Pickup Confirmation Status */}
          {rental.status === "pending_pickup" && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 space-y-2">
              <p className="text-sm text-yellow-400 font-semibold">Awaiting Pickup Confirmation</p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Owner Confirmation</span>
                  {rental.pickupConfirmedByOwner ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Clock className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Borrower Confirmation</span>
                  {rental.pickupConfirmedByBorrower ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Clock className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            {rental.status === "pending_pickup" && onConfirmPickup && (
              <Button
                onClick={() => onConfirmPickup(rental.id)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold"
                disabled={
                  (isOwner && rental.pickupConfirmedByOwner) ||
                  (isBorrower && rental.pickupConfirmedByBorrower)
                }
              >
                {isOwner && !rental.pickupConfirmedByOwner && "Confirm Pickup"}
                {isBorrower && !rental.pickupConfirmedByBorrower && "Confirm Pickup"}
                {((isOwner && rental.pickupConfirmedByOwner) || (isBorrower && rental.pickupConfirmedByBorrower)) && "Confirmed"}
              </Button>
            )}
            
            {rental.status === "pending_return" && onConfirmReturn && isOwner && (
              <Button
                onClick={() => onConfirmReturn(rental.id)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold"
              >
                Confirm Return
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
