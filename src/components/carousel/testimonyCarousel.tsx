import Slider, { Settings } from "react-slick";
import { Testimony } from "../../models/testimony";
import TestimonyCard, {
  Color,
  selectRandomColor2Execption,
  selectRandomColorException,
} from "../cards/testimonyCard";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 915,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: false,
        centerMode: false,
      },
    },
  ],
};

const TestimonyCarousel: React.FC<{ testimonies: Testimony[] }> = ({
  testimonies,
}) => {
  const testimonyCards = () => {
    const rows = [];
    let selectedColor: Color = "orange";
    for (let i = 0; i < testimonies.length; i++) {
      rows.push(
        <TestimonyCard
          testimony={testimonies[i].testimony}
          name={testimonies[i].name}
          role={testimonies[i].role}
          image={testimonies[i].image}
          color={selectedColor}
          className={i % 2 === 0 ? "rotate-1" : "-rotate-1"}
        />,
      );
      selectedColor = selectRandomColorException(selectedColor);
      if (i >= testimonies.length - 1) {
        selectedColor = selectRandomColor2Execption(selectedColor, "orange");
      }
    }
    return rows;
  };
  return (
    <div className="h-[500px] border-b border-primary-black py-5 pb-8">
      <Slider {...settings}>
        {testimonyCards().map((card, index) => (
          <div key={index} className="flex items-center p-5">
            {card}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonyCarousel;
