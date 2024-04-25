import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div
      className={`bg-white_02 hover:bg-white_05 shadow-md rounded-3xl p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
