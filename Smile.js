import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedProps,
} from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Smile = ({ lvl }) => {
  const head = useAnimatedProps(() => {
    const r = interpolate(lvl.value, [1, 5], [40, 56]);
    const fill = interpolateColor(lvl.value, [1, 5], ["#FF748C", "#00FF00"]);
    return {
      r,
      fill,
    };
  });

  const eye1 = useAnimatedProps(() => {
    const r = interpolate(lvl.value, [1, 5], [15, 10]);
    return {
      r,
    };
  });

  const eye2 = useAnimatedProps(() => {
    const r = interpolate(lvl.value, [1, 5], [13, 7]);
    return {
      r,
    };
  });

  return (
    <Svg
      viewBox="25 40 130 130"
      xmlns="http://www.w3.org/2000/svg"
      height={300}
      width={300}
    >
      <AnimatedCircle
        cx={98.051}
        cy={102.745}
        animatedProps={head}
        fill="#46afba"
      />
      <AnimatedCircle
        cx={76.905}
        cy={86.722}
        animatedProps={eye1}
        fill="#fff"
      />
      <AnimatedCircle cx={112.972} cy={87.028} r={12.972} fill="#fff" />
      <Path
        d="M132.217 119.273c-36.31-8.582-77.577-2.57-68-2.438"
        stroke="#000"
        fill="none"
      />
    </Svg>
  );
};

export default Smile;
