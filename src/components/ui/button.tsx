type ButtonStyle = "fill" | "outline";

type Fill = "primary-black" | "secondary-black" | "orange" | "transparent";

type Outline =
  | "primary-black"
  | "secondary-black"
  | "primary-white"
  | "salmon-white"
  | "transparent"
  | "orange";

type ButtonColor = "primary-black" | "secondary-black";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fill?: Fill;
  outline?: Outline;
  style?: ButtonStyle;
  color?: ButtonColor;
  type?: ButtonType;
  disabled?: boolean;
  isArrowIcon?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    onClick,
    style,
    type,
    disabled,
    color,
    fill,
    outline,
    isArrowIcon,
  } = props;

  let buttonClassName = "rounded-full px-4 py-2 " + className;

  switch (fill) {
    case "primary-black":
      buttonClassName = "bg-primary-black " + buttonClassName;
      break;
    case "secondary-black":
      buttonClassName = "bg-secondary-black " + buttonClassName;
      break;
    case "orange":
      buttonClassName = "bg-orange-600 " + buttonClassName;
      break;
    case "transparent":
      buttonClassName = "bg-transparent " + buttonClassName;
      break;
    default:
      break;
  }

  switch (outline) {
    case "primary-black":
      buttonClassName =
        "border border-primary-black text-primary-black " + buttonClassName;
      break;
    case "secondary-black":
      buttonClassName =
        "border border-secondary-black text-secondary-black " + buttonClassName;
      break;
    case "primary-white":
      buttonClassName =
        "border border-primary-white text-primary-white " + buttonClassName;
      break;
    case "salmon-white":
      buttonClassName =
        "border border-salmon-white text-salmon-white " + buttonClassName;
      break;
    case "transparent":
      buttonClassName =
        "border border-transparent text-primary-black " + buttonClassName;
      break;
    case "orange":
      buttonClassName =
        "border border-orange-600 text-orange-600 " + buttonClassName;
      break;
    default:
      break;
  }

  if (outline === undefined || fill === undefined) {
    switch (style) {
      case "fill":
        buttonClassName = "rounded-full px-4 py-2 " + buttonClassName;
        break;
      case "outline":
        buttonClassName = "border rounded-full px-4 py-2 " + buttonClassName;
        break;
      default:
        break;
    }

    switch (color) {
      case "primary-black":
        switch (style) {
          case "fill":
            buttonClassName =
              "bg-primary-black text-primary-white " + buttonClassName;
            break;
          case "outline":
            buttonClassName =
              "border-primary-black bg-transparent text-primary-black " +
              buttonClassName;
            break;
          default:
            break;
        }
        break;
      case "secondary-black":
        switch (style) {
          case "fill":
            buttonClassName =
              "bg-secondary-black text-primary-white " + buttonClassName;
            break;
          case "outline":
            buttonClassName =
              "border-secondary-black bg-transparent text-primary-black " +
              buttonClassName;
            break;
        }
        break;
      default:
        break;
    }
  }

  let arrowImage = "";

  if (isArrowIcon) {
    buttonClassName = "flex items-center justify-between " + buttonClassName;

    switch (outline) {
      case "orange":
        console.log(outline);
        arrowImage =
          "https://semestaakademi.com/assets/v2/Homepage/Sideways_Arrow.svg";
        break;
      default:
        console.log(outline);
        arrowImage =
          "https://semestaakademi.com/assets/v2/Homepage/Sideway_Arrow_Black.svg";
        break;
    }
  }

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
      {isArrowIcon && <img className="h-5 w-5" src={arrowImage} alt="" />}
    </button>
  );
};

export default Button;
