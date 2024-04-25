import React from "react";

export interface TextFieldProps {
  onClick: () => void;
  onChange?: () => void;
  type?: "email" | "password" | "text";
  disabled?: boolean;
  classNameOuterLayer?: string;
  className?: string;
  placeholder?: string;
  prependIcon?: React.ReactNode;
}

const TextField = ({
  onClick,
  onChange,
  type = "text",
  disabled = false,
  classNameOuterLayer = "",
  className = "",
  placeholder = "",
  prependIcon,
}: TextFieldProps) => {
  let classNamesOuterLayer = `w-full rounded-2xl bg-white_02 hover:bg-white_05 flex gap-3 items-center ${classNameOuterLayer}`;
  let classNames = `outline-none bg-transparent py-3 w-full ${className} ${prependIcon ? "pl-0" : "px-4"}`;

  return (
    <div className={classNamesOuterLayer}>
      {prependIcon && <div className="pl-4">{prependIcon}</div>}
      <input
        type={type}
        onClick={onClick}
        className={classNames}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
