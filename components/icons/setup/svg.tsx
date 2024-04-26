import { IconProps, IconSizes } from "./types";
import { ICON_SIZE_TO_WIDTH } from "./constants";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactElement<IconProps> | React.ReactElement<IconProps>[];
  size?: IconSizes;
}

const Svg = ({ size = "m", children, ...props }: SvgProps) => {
  return (
    <svg
      width={ICON_SIZE_TO_WIDTH[size]}
      height={ICON_SIZE_TO_WIDTH[size]}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Svg;
