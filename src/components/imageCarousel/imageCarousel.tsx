import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWidthObserver from "../../hooks/useWidthObserver";

const ImageCarousel: React.FC<{ images: string[]; widthModifier?: number }> = ({
  images,
  widthModifier = 1,
}) => {
  const [displayItems, setDisplayItems] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useWidthObserver(containerRef, (width) => {
    setContainerWidth(width);
  });

  useEffect(() => {
    if (containerRef.current?.clientWidth) {
      setDisplayItems(images);
      setContainerWidth(containerRef.current.clientWidth);
    }
    return () => {
      setDisplayItems([]);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-[7rem] overflow-hidden w-full">
      <div className="flex w-fit min-h-[7rem] h-full items-center">
        <div
          className={`h-10 flex animate-go-left-infinite`}
          style={{
            width: containerWidth ? containerWidth * 2 * widthModifier : 0,
          }}
        >
          {displayItems.map((logo, index) => (
            <div key={index} className="h-full w-full">
              <img
                src={logo}
                alt="Semesta Akademi"
                className="mx-auto w-auto h-full"
              />
            </div>
          ))}
          {displayItems.map((logo, index) => (
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

export default ImageCarousel;
