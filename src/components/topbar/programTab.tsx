import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const ProgramTab: React.FC<{
  items: {
    name: string;
    childs: {
      name: string;
      to: string;
    }[];
  }[];
  isOpen: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}> = ({ items, isOpen, onMouseEnter, onMouseLeave }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context>();

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {});
    return () => ctx.current?.revert();
  }, [ctx]);

  useLayoutEffect(() => {
    if (isOpen) {
      ctx.current?.add(() =>
        gsap.to(boxRef.current, {
          duration: 0.5,
          height: "auto",
          ease: "expo.out",
        }),
      );
    } else {
      ctx.current?.add(() =>
        gsap.from(boxRef.current, {
          duration: 0.5,
          height: "auto",
          ease: "expo.out",
        }),
      );
    }

    return () => {
      ctx.current?.revert();
    };
  }, [isOpen]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={boxRef}
      className={`fixed left-0 top-20 z-20 flex h-0 w-full overflow-hidden bg-primary-black`}
    >
      {items.map((item, index) => (
        <div
          className="program-tab w-full flex-col p-4 marker:flex md:px-12 md:py-4"
          key={index}
        >
          <h3 className="title text-2xl font-semibold text-orange-600">
            {item.name}
          </h3>
          {item.childs.map((child, index) => (
            <Link
              key={index}
              href={child.to}
              className="text flex flex-col text-primary-white"
            >
              {child.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProgramTab;
