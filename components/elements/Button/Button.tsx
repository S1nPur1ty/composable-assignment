import Link from "next/link";

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

interface ButtonButtonProps extends BaseButtonProps {
  as?: "button";
  onClick?: () => void;
}

interface LinkButtonProps extends BaseButtonProps {
  as: "a";
  href: string;
}

export type ButtonProps = LinkButtonProps | ButtonButtonProps;

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "default",
    size = "medium",
    disabled = false,
    className = "",
  } = props;
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
        ? "border-solid border border-white_05 text-titanium"
        : "border-solid border border-white/60 hover:border-white active:border-white/60";
      break;
    case "default":
    default:
      classNames += disabled
        ? " bg-transparent text-titanium"
        : " bg-white_02 hover:bg-white_05 active:bg-white_02";
  }

  if (props.as === "a")
    return (
      <Link className={classNames} href={props.href}>
        {children}
      </Link>
    );

  return (
    <button onClick={props.onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
