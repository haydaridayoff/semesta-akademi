import { useRef } from "react";
import React from "react";

const InfiniteCarousel: React.FC<{
  images?: string[];
  items?: React.JSX.Element[];
  className?: string;
  widthModifier?: number;
}> = ({ images, items, widthModifier = 1, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <div className="flex h-full w-fit items-center">
        <div className={`flex h-10 shrink-0 animate-go-left-infinite `}>
          {items &&
            items.map((item, index) => (
              <div key={index} className="mx-8 h-full w-full">
                {item}
              </div>
            ))}
          {items &&
            items.map((item, index) => (
              <div key={index} className="mx-8 h-full w-full">
                {item}
              </div>
            ))}
          {images &&
            images.map((logo, index) => (
              <div key={index} className="mx-16 h-full w-full">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto h-full w-full"
                />
              </div>
            ))}
          {images &&
            images.map((logo, index) => (
              <div key={index} className="mx-16 h-full w-full">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto h-full w-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
