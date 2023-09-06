import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWidthObserver from "../../hooks/useWidthObserver";
import React from "react";

const InfiniteCarousel: React.FC<{
  images?: string[];
  items?: React.JSX.Element[];
  widthModifier?: number;
}> = ({ images, items, widthModifier = 1 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useWidthObserver(containerRef, (width) => {
    setContainerWidth(width);
  });

  return (
    <div ref={containerRef} className="sm:min-h-[7rem] overflow-hidden w-full">
      <div className="flex w-fit h-full items-center">
        <div
          className={`h-10 flex animate-go-left-infinite`}
          style={{
            width: containerWidth ? containerWidth * 2 * widthModifier : 0,
          }}
        >
          {items &&
            items.map((item, index) => (
              <div key={index} className="h-full w-full mx-5">
                {item}
              </div>
            ))}
          {items &&
            items.map((item, index) => (
              <div key={index} className="h-full w-full mx-5">
                {item}
              </div>
            ))}
          {images &&
            images.map((logo, index) => (
              <div key={index} className="h-full w-full mx-5">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto w-auto h-full object-contain"
                />
              </div>
            ))}
          {images &&
            images.map((logo, index) => (
              <div key={index} className="h-full w-full mx-5">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto w-auto h-full object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
