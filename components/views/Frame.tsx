interface FrameProps {
  children: React.ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return (
    <div className="w-screen min-h-screen flex justify-center p-5 md:p-10">
      <div className="w-full h-full max-w-[800px]">{children}</div>
    </div>
  );
};

export default Frame;
