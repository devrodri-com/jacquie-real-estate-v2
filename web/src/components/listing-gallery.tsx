"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ListingGalleryLabels = {
  close: string;
  next: string;
  open: string;
  photos: string;
  previous: string;
};

type ListingGalleryProps = {
  address: string;
  imageAltPrefix: string;
  images: string[];
  labels: ListingGalleryLabels;
};

export function ListingGallery({
  address,
  imageAltPrefix,
  images,
  labels,
}: Readonly<ListingGalleryProps>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, showNext, showPrevious]);

  if (images.length === 0) {
    return null;
  }

  const previewImages = images.slice(0, 5);
  const activePosition = activeIndex === null ? 0 : activeIndex + 1;

  return (
    <>
      <div className="space-y-3">
        <button
          aria-label={`${labels.open} ${address}`}
          className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-primary/8 bg-accent/10 text-left shadow-[0_18px_48px_rgba(59,39,74,0.08)]"
          onClick={() => setActiveIndex(0)}
          type="button"
        >
          <Image
            alt={`${imageAltPrefix} ${address}`}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            src={images[0]}
          />
        </button>

        {images.length > 1 ? (
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {previewImages.slice(1).map((image, index) => {
              const imageIndex = index + 1;
              const isLastPreview = imageIndex === previewImages.length - 1;
              const hasHiddenImages = images.length > previewImages.length;

              return (
                <button
                  aria-label={`${labels.open} ${address} ${imageIndex + 1}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[6px] border border-primary/8 bg-accent/10"
                  key={image}
                  onClick={() => setActiveIndex(imageIndex)}
                  type="button"
                >
                  <Image
                    alt={`${imageAltPrefix} ${address} ${imageIndex + 1}`}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 22vw, 42vw"
                    src={image}
                  />
                  {isLastPreview && hasHiddenImages ? (
                    <span className="absolute inset-0 flex items-center justify-center bg-primary/62 px-2 text-center text-xs font-semibold text-white backdrop-blur-[1px] sm:text-sm">
                      {images.length} {labels.photos}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      {activeImage ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#17101d]/96 px-4 py-6 backdrop-blur-sm"
          role="dialog"
        >
          <div className="absolute left-4 top-4 text-sm font-medium text-white/78">
            {activePosition} / {images.length}
          </div>

          <button
            aria-label={labels.close}
            className="absolute right-4 top-4 rounded-[6px] border border-white/18 bg-white/95 px-4 py-2 text-sm font-semibold text-primary shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-colors hover:bg-surface"
            onClick={() => setActiveIndex(null)}
            type="button"
          >
            {labels.close}
          </button>

          {images.length > 1 ? (
            <button
              aria-label={labels.previous}
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/18 bg-white/95 px-4 py-3 text-lg font-semibold text-primary shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-colors hover:bg-surface sm:block"
              onClick={showPrevious}
              type="button"
            >
              ←
            </button>
          ) : null}

          <div className="relative h-[76vh] w-full max-w-6xl overflow-hidden rounded-[8px]">
            <Image
              alt={`${imageAltPrefix} ${address} ${(activeIndex ?? 0) + 1}`}
              className="object-contain"
              fill
              sizes="100vw"
              src={activeImage}
            />
          </div>

          {images.length > 1 ? (
            <button
              aria-label={labels.next}
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/18 bg-white/95 px-4 py-3 text-lg font-semibold text-primary shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-colors hover:bg-surface sm:block"
              onClick={showNext}
              type="button"
            >
              →
            </button>
          ) : null}

          {images.length > 1 ? (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 sm:hidden">
              <button
                aria-label={labels.previous}
                className="rounded-full border border-white/18 bg-white/95 px-4 py-3 text-lg font-semibold text-primary shadow-[0_12px_32px_rgba(0,0,0,0.22)]"
                onClick={showPrevious}
                type="button"
              >
                ←
              </button>
              <button
                aria-label={labels.next}
                className="rounded-full border border-white/18 bg-white/95 px-4 py-3 text-lg font-semibold text-primary shadow-[0_12px_32px_rgba(0,0,0,0.22)]"
                onClick={showNext}
                type="button"
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
