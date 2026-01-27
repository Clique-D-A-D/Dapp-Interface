import { ListAssetModal } from "@/app/components/ListAssetModal";
import { AssetCard, Asset } from "@/app/components/AssetCard";
import { Package, Edit, Trash2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface MyListingsProps {
  assets: Asset[];
  userAddress: string;
  onListAsset: (asset: Omit<Asset, "id" | "owner" | "available" | "ownerReputation">) => void;
  onEditAsset?: (assetId: string) => void;
  onDeleteAsset?: (assetId: string) => void;
}

export function MyListings({ assets, userAddress, onListAsset, onEditAsset, onDeleteAsset }: MyListingsProps) {
  const myAssets = assets.filter(asset => 
    asset.owner.toLowerCase() === userAddress.toLowerCase()
  );

  return (
    <section id="my-listings" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">My Listings</h2>
            <p className="text-gray-400">Manage your listed assets</p>
          </div>
          <ListAssetModal onSubmit={onListAsset} />
        </div>

        {myAssets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myAssets.map((asset) => (
              <div key={asset.id} className="relative group">
                <AssetCard asset={asset} onRent={() => {}} />
                
                {/* Action Buttons Overlay */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {onEditAsset && (
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => onEditAsset(asset.id)}
                      className="bg-black/80 border-green-500/30 text-green-400 hover:bg-green-500/20"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  )}
                  {onDeleteAsset && (
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => onDeleteAsset(asset.id)}
                      className="bg-black/80 border-red-500/30 text-red-400 hover:bg-red-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No listings yet</h3>
            <p className="text-gray-400 mb-6">Start by listing your first asset</p>
            <ListAssetModal onSubmit={onListAsset} />
          </div>
        )}
      </div>
    </section>
  );
}
