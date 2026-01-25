import { Plus } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface ListAssetModalProps {
  onSubmit: (asset: {
    name: string;
    description: string;
    image: string;
    rentalFee: string;
    safetyBond: string;
    duration: string;
    location: string;
  }) => void;
}

export function ListAssetModal({ onSubmit }: ListAssetModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    rentalFee: "",
    safetyBond: "",
    duration: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      description: "",
      image: "",
      rentalFee: "",
      safetyBond: "",
      duration: "",
      location: "",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          List New Asset
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black border-green-500/30 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">List Your Asset</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Asset Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Professional Camera"
              required
              className="bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-300">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your item in detail..."
              required
              rows={4}
              className="bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-gray-300">Image URL</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              required
              className="bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
            />
            {formData.image && (
              <div className="mt-2 relative h-40 rounded-lg overflow-hidden border border-green-500/20">
                <ImageWithFallback
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rentalFee" className="text-gray-300">Rental Fee (ETH)</Label>
              <Input
                id="rentalFee"
                type="number"
                step="0.001"
                value={formData.rentalFee}
                onChange={(e) => setFormData({ ...formData, rentalFee: e.target.value })}
                placeholder="0.05"
                required
                className="bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="safetyBond" className="text-gray-300">Safety Bond (ETH)</Label>
              <Input
                id="safetyBond"
                type="number"
                step="0.001"
                value={formData.safetyBond}
                onChange={(e) => setFormData({ ...formData, safetyBond: e.target.value })}
                placeholder="0.2"
                required
                className="bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-gray-300">Rental Duration</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="e.g., 3 days"
                required
                className="bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-gray-300">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Campus"
                required
                className="bg-black/40 border-green-500/20 text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              List Asset
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 border-green-500/30 text-green-400 hover:bg-green-500/10"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
