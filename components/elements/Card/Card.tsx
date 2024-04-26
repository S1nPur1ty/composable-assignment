import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div
      className={`bg-white_02 shadow-md rounded-3xl p-5 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
