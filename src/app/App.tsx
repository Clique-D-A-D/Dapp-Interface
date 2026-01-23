import { useState, useEffect } from "react";
import { Navbar } from "@/app/components/Navbar";
import { HeroSection } from "@/app/components/HeroSection";
import { Marketplace } from "@/app/components/Marketplace";
import { MyRentals } from "@/app/components/MyRentals";
import { MyListings } from "@/app/components/MyListings";
import { HowItWorks } from "@/app/components/HowItWorks";
import { UserStats } from "@/app/components/UserStats";
import { Footer } from "@/app/components/Footer";
import { RentalModal } from "@/app/components/RentalModal";
import { Asset } from "@/app/components/AssetCard";
import { Rental } from "@/app/components/RentalCard";
import { toast } from "sonner";
import { Toaster } from "@/app/components/ui/sonner";

function App() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [isRentalModalOpen, setIsRentalModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [rentals, setRentals] = useState<Rental[]>([]);

  // Initialize mock data
  useEffect(() => {
    const mockAssets: Asset[] = [
      {
        id: "1",
        name: "Professional DSLR Camera",
        description: "Canon EOS 5D Mark IV with 24-70mm lens. Perfect for photography projects and events.",
        image: "https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY4ODAyNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        owner: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7",
        rentalFee: "0.05",
        safetyBond: "0.2",
        duration: "3 days",
        location: "Campus",
        available: true,
        ownerReputation: 95,
      },
      {
        id: "2",
        name: "Power Drill & Tool Set",
        description: "Complete power drill kit with various bits and accessories. Great for DIY projects.",
        image: "https://images.unsplash.com/photo-1593307315564-c96172dc89dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRyaWxsJTIwdG9vbHxlbnwxfHx8fDE3Njg3ODY0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        owner: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
        rentalFee: "0.03",
        safetyBond: "0.15",
        duration: "2 days",
        location: "Dorm A",
        available: true,
        ownerReputation: 88,
      },
      {
        id: "3",
        name: "Extension Ladder",
        description: "24-foot aluminum extension ladder. Essential for high-reach tasks and maintenance.",
        image: "https://images.unsplash.com/photo-1549030782-4935f80baeb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWRkZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY4Nzg2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        owner: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed",
        rentalFee: "0.02",
        safetyBond: "0.1",
        duration: "1 day",
        location: "Building 3",
        available: false,
        ownerReputation: 92,
      },
      {
        id: "4",
        name: "Gaming Console - PS5",
        description: "PlayStation 5 with two controllers and popular games. Perfect for weekend gaming sessions.",
        image: "https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2ODc3ODE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        owner: "0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359",
        rentalFee: "0.08",
        safetyBond: "0.3",
        duration: "5 days",
        location: "Campus",
        available: true,
        ownerReputation: 97,
      },
      {
        id: "5",
        name: "Mountain Bike",
        description: "High-quality mountain bike perfect for trails and commuting. Recently serviced and maintained.",
        image: "https://images.unsplash.com/photo-1763098843789-e03a632b4710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwYmlrZXxlbnwxfHx8fDE3Njg4MjA0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        owner: "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
        rentalFee: "0.04",
        safetyBond: "0.2",
        duration: "7 days",
        location: "Dorm B",
        available: true,
        ownerReputation: 90,
      },
      {
        id: "6",
        name: "HD Projector",
        description: "1080p projector with screen and cables. Ideal for presentations and movie nights.",
        image: "https://images.unsplash.com/photo-1762186540875-4c6bf133ac13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0b3IlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY4ODIwNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        owner: "0xdD870fA1b7C4700F2BD7f44238821C26f7392148",
        rentalFee: "0.06",
        safetyBond: "0.25",
        duration: "4 days",
        location: "Building 5",
        available: true,
        ownerReputation: 93,
      },
    ];

    setAssets(mockAssets);

    // Add some mock rentals if wallet is connected
    if (walletAddress) {
      const mockRentals: Rental[] = [
        {
          id: "r1",
          assetName: "Extension Ladder",
          assetImage: "https://images.unsplash.com/photo-1549030782-4935f80baeb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWRkZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY4Nzg2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
          owner: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed",
          borrower: walletAddress,
          rentalFee: "0.02",
          safetyBond: "0.1",
          startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          status: "active",
          pickupConfirmedByOwner: true,
          pickupConfirmedByBorrower: true,
          returnConfirmedByOwner: false,
        },
      ];
      setRentals(mockRentals);
    }
  }, [walletAddress]);

  const handleConnectWallet = () => {
    // Simulate wallet connection
    const mockAddress = "0x" + Math.random().toString(16).substr(2, 40);
    setWalletAddress(mockAddress);
    toast.success("Wallet connected successfully!", {
      description: `${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`,
    });
  };

  const handleDisconnectWallet = () => {
    setWalletAddress(null);
    setRentals([]);
    toast.info("Wallet disconnected");
  };

  const handleRentAsset = (asset: Asset) => {
    if (!walletAddress) {
      toast.error("Please connect your wallet first");
      return;
    }
    setSelectedAsset(asset);
    setIsRentalModalOpen(true);
  };

  const handleConfirmRental = () => {
    if (!selectedAsset || !walletAddress) return;

    setIsProcessing(true);

    // Simulate blockchain transaction
    setTimeout(() => {
      const newRental: Rental = {
        id: `r${Date.now()}`,
        assetName: selectedAsset.name,
        assetImage: selectedAsset.image,
        owner: selectedAsset.owner,
        borrower: walletAddress,
        rentalFee: selectedAsset.rentalFee,
        safetyBond: selectedAsset.safetyBond,
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        status: "pending_pickup",
        pickupConfirmedByOwner: false,
        pickupConfirmedByBorrower: false,
        returnConfirmedByOwner: false,
      };

      setRentals([...rentals, newRental]);

      // Update asset availability
      setAssets(
        assets.map((a) =>
          a.id === selectedAsset.id ? { ...a, available: false } : a
        )
      );

      setIsProcessing(false);
      setIsRentalModalOpen(false);
      toast.success("Rental initiated successfully!", {
        description: "Please confirm pickup with the owner",
      });

      // Scroll to rentals section
      setTimeout(() => {
        document.getElementById("my-rentals")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }, 2000);
  };

  const handleListAsset = (assetData: Omit<Asset, "id" | "owner" | "available" | "ownerReputation">) => {
    if (!walletAddress) {
      toast.error("Please connect your wallet first");
      return;
    }

    const newAsset: Asset = {
      ...assetData,
      id: `asset${Date.now()}`,
      owner: walletAddress,
      available: true,
      ownerReputation: 85, // Default reputation for new listings
    };

    setAssets([newAsset, ...assets]);
    toast.success("Asset listed successfully!", {
      description: "Your item is now available for rent",
    });
  };

  const handleConfirmPickup = (rentalId: string) => {
    const rental = rentals.find((r) => r.id === rentalId);
    if (!rental || !walletAddress) return;

    const isOwner = rental.owner.toLowerCase() === walletAddress.toLowerCase();
    const isBorrower = rental.borrower.toLowerCase() === walletAddress.toLowerCase();

    setRentals(
      rentals.map((r) => {
        if (r.id === rentalId) {
          const updated = {
            ...r,
            pickupConfirmedByOwner: isOwner ? true : r.pickupConfirmedByOwner,
            pickupConfirmedByBorrower: isBorrower ? true : r.pickupConfirmedByBorrower,
          };

          // If both confirmed, change status to active
          if (updated.pickupConfirmedByOwner && updated.pickupConfirmedByBorrower) {
            updated.status = "active" as const;
            toast.success("Pickup confirmed by both parties!", {
              description: "Rental period has started",
            });
          } else {
            toast.success("Pickup confirmed", {
              description: "Waiting for the other party to confirm",
            });
          }

          return updated;
        }
        return r;
      })
    );
  };

  const handleConfirmReturn = (rentalId: string) => {
    setRentals(
      rentals.map((r) => {
        if (r.id === rentalId) {
          toast.success("Return confirmed!", {
            description: "Safety bond has been refunded",
          });
          return { ...r, status: "completed" as const, returnConfirmedByOwner: true };
        }
        return r;
      })
    );

    // Make asset available again
    const rental = rentals.find((r) => r.id === rentalId);
    if (rental) {
      setAssets(
        assets.map((a) =>
          a.name === rental.assetName ? { ...a, available: true } : a
        )
      );
    }
  };

  // Calculate user stats
  const userStats = {
    reputation: 85,
    totalRentals: rentals.filter(r => r.borrower.toLowerCase() === walletAddress?.toLowerCase()).length,
    successfulReturns: rentals.filter(r => 
      r.borrower.toLowerCase() === walletAddress?.toLowerCase() && r.status === "completed"
    ).length,
    totalListed: assets.filter(a => a.owner.toLowerCase() === walletAddress?.toLowerCase()).length,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        walletAddress={walletAddress}
        onConnectWallet={handleConnectWallet}
        onDisconnectWallet={handleDisconnectWallet}
      />

      {!walletAddress ? (
        <>
          <HeroSection onConnectWallet={handleConnectWallet} />
          <HowItWorks />
        </>
      ) : (
        <>
          <div className="pt-16">
            <UserStats
              walletAddress={walletAddress}
              reputation={userStats.reputation}
              totalRentals={userStats.totalRentals}
              successfulReturns={userStats.successfulReturns}
              totalListed={userStats.totalListed}
            />
          </div>
          <Marketplace assets={assets} onRent={handleRentAsset} />
          <MyRentals
            rentals={rentals}
            userAddress={walletAddress}
            onConfirmPickup={handleConfirmPickup}
            onConfirmReturn={handleConfirmReturn}
          />
          <MyListings
            assets={assets}
            userAddress={walletAddress}
            onListAsset={handleListAsset}
          />
          <HowItWorks />
        </>
      )}

      <Footer />

      <RentalModal
        asset={selectedAsset}
        open={isRentalModalOpen}
        onClose={() => setIsRentalModalOpen(false)}
        onConfirm={handleConfirmRental}
        isProcessing={isProcessing}
      />

      <Toaster position="top-right" theme="dark" />
    </div>
  );
}

export default App;
