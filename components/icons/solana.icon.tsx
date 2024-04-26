import Svg from "./setup/svg";
import { IconProps } from "./setup/types";

const SolanaIcon = (props: IconProps = { size: "m" }) => {
  return (
    <Svg
      {...props}
      viewBox="0 0 34 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.27801 23.3604C6.38212 23.245 6.50767 23.1514 6.64853 23.089C6.78938 23.0235 6.93943 22.9892 7.0956 22.9861H32.7531C32.8603 22.9861 32.9674 23.0204 33.0562 23.0828C33.1481 23.1452 33.2185 23.2294 33.2614 23.3323C33.3043 23.4353 33.3196 23.5444 33.3012 23.6536C33.2828 23.7628 33.2338 23.8657 33.1634 23.9468L27.722 30.0979C27.6179 30.2133 27.4924 30.3069 27.3515 30.3693C27.2107 30.4348 27.0606 30.4691 26.9044 30.4722H1.23164C1.12446 30.4722 1.01729 30.4379 0.928488 30.3755C0.839687 30.3131 0.766196 30.2289 0.723326 30.126C0.680456 30.0231 0.668208 29.9139 0.683519 29.8047C0.698829 29.6955 0.750885 29.5926 0.824376 29.5115L6.27801 23.3604ZM33.1849 18.2605C33.2583 18.3416 33.3073 18.4445 33.3257 18.5537C33.3441 18.6629 33.3288 18.7752 33.2859 18.875C33.243 18.9779 33.1726 19.0621 33.0807 19.1245C32.9919 19.1869 32.8848 19.2181 32.7745 19.2212L7.11091 19.2431C6.9578 19.2399 6.80469 19.2056 6.66384 19.1401C6.52298 19.0746 6.39743 18.9842 6.29332 18.8687L0.81519 12.7395C0.741699 12.6584 0.692705 12.5555 0.674332 12.4463C0.65596 12.3371 0.67127 12.2248 0.71414 12.125C0.757009 12.0221 0.827438 11.9379 0.919302 11.8755C1.0081 11.8131 1.11528 11.7819 1.22245 11.7788L26.8891 11.7569C27.0422 11.7601 27.1953 11.7944 27.3362 11.8599C27.4771 11.9254 27.6026 12.0158 27.7067 12.1312L33.1849 18.2605ZM6.27801 0.902077C6.38212 0.786666 6.50767 0.693089 6.64853 0.630705C6.78938 0.565202 6.93943 0.53089 7.0956 0.527771L32.7684 0.549605C32.8756 0.549605 32.9828 0.583917 33.0716 0.646301C33.1604 0.708685 33.2338 0.792904 33.2767 0.895838C33.3196 0.998772 33.3349 1.10794 33.3165 1.21712C33.2982 1.32629 33.2492 1.42922 33.1757 1.51032L27.722 7.63958C27.6179 7.75499 27.4924 7.84856 27.3515 7.91095C27.2107 7.97645 27.0606 8.01076 26.9044 8.01388H1.23164C1.12446 8.01388 1.01729 7.97957 0.928488 7.91719C0.839687 7.8548 0.766196 7.77058 0.723326 7.66765C0.680456 7.56472 0.668208 7.45554 0.683519 7.34637C0.701891 7.2372 0.750885 7.13426 0.824376 7.05317L6.27801 0.902077Z"
        fill="url(#paint0_linear_2004_843)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2004_843"
          x1="1.65393"
          y1="31.1319"
          x2="32.9021"
          y2="0.455774"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9945FF" />
          <stop offset="0.14" stopColor="#8A53F4" />
          <stop offset="0.42" stopColor="#6377D6" />
          <stop offset="0.79" stopColor="#24B0A7" />
          <stop offset="0.99" stopColor="#00D18C" />
          <stop offset="1" stopColor="#00D18C" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default SolanaIcon;