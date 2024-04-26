interface FrameProps {
  children: React.ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return (
    <div className="w-screen min-h-screen flex justify-center p-5 font-gilroy">
      <div className="w-full h-full max-w-inner">{children}</div>
    </div>
  );
};

export default Frame;
