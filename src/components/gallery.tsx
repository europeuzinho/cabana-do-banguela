
"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type ImageProps = {
  src: string;
  alt: string;
  hint: string;
};

interface GalleryProps {
  images: ImageProps[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  const openDialog = (image: ImageProps) => {
    setSelectedImage(image);
  };

  const closeDialog = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            onClick={() => openDialog(image)}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={image.hint}
              />
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
        <DialogContent className="max-w-3xl p-0">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
