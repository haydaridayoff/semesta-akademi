export type Color = "orange" | "blue" | "purple";

export const selectRandomColor = () => {
  const colors: Color[] = ["orange", "blue", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const selectRandomColorException = (color: Color) => {
  const colors: Color[] = ["orange", "blue", "purple"];
  // return one color, except the selected color
  const newColors = colors.filter((c) => c !== color);
  return newColors[Math.floor(Math.random() * newColors.length)];
};

export const selectRandomColor2Execption = (color1: Color, color2: Color) => {
  const colors: Color[] = ["orange", "blue", "purple"];
  // return one color, except the selected color
  const newColors = colors.filter((c) => c !== color1 && c !== color2);
  return newColors[Math.floor(Math.random() * newColors.length)];
};

const TestimonyCard: React.FC<{
  testimony: string;
  name: string;
  role: string;
  image: string;
  color?: Color;
  className?: string;
}> = ({ testimony, name, role, image, color, className }) => {
  return (
    <div
      className={`mx-auto flex h-[350px] w-[320px] flex-col p-6  sm:min-w-[600px] ${className}`}
      style={{
        backgroundColor: color,
      }}
    >
      <p className="h-full pb-6 text-base font-semibold sm:text-xl">{`"${testimony}"`}</p>
      <div className="flex h-full items-center justify-between pt-6">
        <div className="h-fit">
          <h3 className="text-lg font-semibold sm:text-2xl">{name}</h3>
          <p className="font-redactionItalic text-base">{role}</p>
        </div>
        <div className="h-fit">
          <div className="h-10 w-10 overflow-hidden rounded-full sm:h-20 sm:w-20">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
