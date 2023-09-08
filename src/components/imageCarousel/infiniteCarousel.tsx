import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWidthObserver from "../../hooks/useWidthObserver";
import React from "react";

const InfiniteCarousel: React.FC<{
  images?: string[];
  items?: React.JSX.Element[];
  className?: string;
  widthModifier?: number;
}> = ({ images, items, widthModifier = 1, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // useWidthObserver(containerRef, (width) => {
  //   setContainerWidth(width);
  // });

  return (
    <div ref={containerRef} className={`overflow-hidden w-full ${className}`}>
      <div className="flex w-fit h-full items-center">
        <div
          className={`h-10 flex shrink-0 animate-go-left-infinite `}
          // style={{
          //   width: containerWidth ? containerWidth * 2 * widthModifier : 0,
          // }}
        >
          {items &&
            items.map((item, index) => (
              <div key={index} className="h-full w-full mx-8">
                {item}
              </div>
            ))}
          {items &&
            items.map((item, index) => (
              <div key={index} className="h-full w-full mx-8">
                {item}
              </div>
            ))}
          {images &&
            images.map((logo, index) => (
              <div key={index} className="h-full w-full mx-16">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto w-full h-full"
                />
              </div>
            ))}
          {images &&
            images.map((logo, index) => (
              <div key={index} className="h-full w-full mx-16">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto w-full h-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
