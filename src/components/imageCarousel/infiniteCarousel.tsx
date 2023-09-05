import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWidthObserver from "../../hooks/useWidthObserver";
import React from "react";

const InfiniteCarousel: React.FC<{
  images?: string[];
  items?: React.JSX.Element[];
  widthModifier?: number;
}> = ({ images, items, widthModifier = 1 }) => {
  const [displayItems, setDisplayItems] = useState<string[]>([]);
  const [carouselItems, setCarouselItems] = useState<React.JSX.Element[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useWidthObserver(containerRef, (width) => {
    setContainerWidth(width);
  });

  useEffect(() => {
    if (containerRef.current?.clientWidth) {
      if (images) setDisplayItems(images);
      setContainerWidth(containerRef.current.clientWidth);
    }
    return () => {
      setDisplayItems([]);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current?.clientWidth) {
      if (items) setCarouselItems(items);
      setContainerWidth(containerRef.current.clientWidth);
    }
    return () => {
      setCarouselItems([]);
    };
  });

  return (
    <div ref={containerRef} className="min-h-[7rem] overflow-hidden w-full">
      <div className="flex w-fit min-h-[7rem] h-full items-center">
        <div
          className={`h-10 flex animate-go-left-infinite hover:animate-none`}
          style={{
            width: containerWidth ? containerWidth * 2 * widthModifier : 0,
          }}
        >
          {items &&
            carouselItems.map((item, index) => (
              <div key={index} className="h-full w-full">
                {item}
              </div>
            ))}
          {items &&
            carouselItems.map((item, index) => (
              <div key={index} className="h-full w-full">
                {item}
              </div>
            ))}
          {images &&
            displayItems.map((logo, index) => (
              <div key={index} className="h-full w-full">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto w-auto h-full"
                />
              </div>
            ))}
          {images &&
            displayItems.map((logo, index) => (
              <div key={index} className="h-full w-full">
                <img
                  src={logo}
                  alt="Semesta Akademi"
                  className="mx-auto w-auto h-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
