import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { RentalCard, Rental } from "@/app/components/RentalCard";
import { Package } from "lucide-react";

interface MyRentalsProps {
  rentals: Rental[];
  userAddress: string;
  onConfirmPickup: (rentalId: string) => void;
  onConfirmReturn: (rentalId: string) => void;
}

export function MyRentals({ rentals, userAddress, onConfirmPickup, onConfirmReturn }: MyRentalsProps) {
  const borrowedRentals = rentals.filter(
    r => r.borrower.toLowerCase() === userAddress.toLowerCase()
  );
  const lendedRentals = rentals.filter(
    r => r.owner.toLowerCase() === userAddress.toLowerCase()
  );

  const activeRentals = rentals.filter(r => 
    r.status === "active" || r.status === "pending_pickup" || r.status === "pending_return"
  );
  const completedRentals = rentals.filter(r => r.status === "completed");

  return (
    <section id="my-rentals" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My Rentals</h2>
          <p className="text-gray-400">Track all your rental activities</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 bg-black/40 border border-green-500/20 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
              All ({rentals.length})
            </TabsTrigger>
            <TabsTrigger value="borrowed" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
              Borrowed ({borrowedRentals.length})
            </TabsTrigger>
            <TabsTrigger value="lended" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
              Lended ({lendedRentals.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
              Completed ({completedRentals.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {activeRentals.length > 0 ? (
              activeRentals.map((rental) => (
                <RentalCard
                  key={rental.id}
                  rental={rental}
                  userAddress={userAddress}
                  onConfirmPickup={onConfirmPickup}
                  onConfirmReturn={onConfirmReturn}
                />
              ))
            ) : (
              <EmptyState message="No active rentals" />
            )}
          </TabsContent>

          <TabsContent value="borrowed" className="space-y-4">
            {borrowedRentals.length > 0 ? (
              borrowedRentals.map((rental) => (
                <RentalCard
                  key={rental.id}
                  rental={rental}
                  userAddress={userAddress}
                  onConfirmPickup={onConfirmPickup}
                  onConfirmReturn={onConfirmReturn}
                />
              ))
            ) : (
              <EmptyState message="You haven't borrowed any items yet" />
            )}
          </TabsContent>

          <TabsContent value="lended" className="space-y-4">
            {lendedRentals.length > 0 ? (
              lendedRentals.map((rental) => (
                <RentalCard
                  key={rental.id}
                  rental={rental}
                  userAddress={userAddress}
                  onConfirmPickup={onConfirmPickup}
                  onConfirmReturn={onConfirmReturn}
                />
              ))
            ) : (
              <EmptyState message="You haven't lended any items yet" />
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedRentals.length > 0 ? (
              completedRentals.map((rental) => (
                <RentalCard
                  key={rental.id}
                  rental={rental}
                  userAddress={userAddress}
                />
              ))
            ) : (
              <EmptyState message="No completed rentals yet" />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Package className="w-8 h-8 text-green-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
      <p className="text-gray-400">Start renting or listing items to see them here</p>
    </div>
  );
}
