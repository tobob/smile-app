import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      viewBox="25 40 130 130"
      xmlns="http://www.w3.org/2000/svg"
      height={300}
      width={300}
      {...props}
    >
      <Circle cx={98.051} cy={102.745} r={56.401} fill="#46afba" />
      <Circle cx={76.905} cy={86.722} r={13.278} fill="#fff" />
      <Circle cx={112.972} cy={87.028} r={12.972} fill="#fff" />
      <Path
        d="M132.217 119.273c-36.31-8.582-77.577-2.57-68-2.438"
        stroke="#000"
        fill="none"
      />
    </Svg>
  );
}

export default SvgComponent;
