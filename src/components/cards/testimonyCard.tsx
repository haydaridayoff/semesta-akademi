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
      className={`m-4 flex flex-col p-6 h-[350px] sm:w-[600px] w-[360px] ${className}`}
      style={{
        backgroundColor: color,
      }}
    >
      <p className="h-full pb-6 font-semibold text-xl">{`"${testimony}"`}</p>
      <div className="flex h-full justify-between items-center pt-6">
        <div className="h-fit">
          <h3 className="font-semibold text-2xl">{name}</h3>
          <p className="font-redactionItalic text-lg">{role}</p>
        </div>
        <div className="h-fit">
          <div className="h-20 w-20 rounded-full overflow-hidden">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;