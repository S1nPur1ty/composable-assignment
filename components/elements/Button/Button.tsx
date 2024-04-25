export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "default" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  className = "",
}: ButtonProps) => {
  let classNames = `font-bold rounded-full py-3 px-5 ${className}`;

  switch (size) {
    case "small":
      classNames += " text-sm";
      break;
    case "large":
      classNames += " text-lg";
      break;
    default:
      classNames += " text-base";
  }

  switch (variant) {
    case "outline":
      classNames += disabled
        ? "border-solid border border-white_05 text-white/60"
        : "border-solid border border-white/60 hover:border-white active:border-white/60";
      break;
    case "default":
    default:
      classNames += disabled
        ? " bg-transparent text-white/60"
        : " bg-white_02 hover:bg-white_05 active:bg-white_02";
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
