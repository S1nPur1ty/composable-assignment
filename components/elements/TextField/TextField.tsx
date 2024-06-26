import React from "react";

export interface TextFieldProps {
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  let classNamesOuterLayer = `w-full rounded-2xl bg-white_02 hover:bg-white_05 group flex gap-3 items-center h-14 ${classNameOuterLayer}`;
  let classNames = `outline-none bg-transparent py-3 w-full group-hover:placeholder-white ${className} ${prependIcon ? "pl-0" : "px-4"}`;

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
