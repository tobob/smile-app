import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedProps,
} from "react-native-reanimated";
import { interpolateColor, parse, interpolatePath } from "react-native-redash";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

const Smile = ({ lvl }) => {
  const smile1 = parse(
    "M 132.217 119.273 C 102.588 174.206 55.253 123.195 64.217 116.835"
  );
  const smile2 = parse(
    "M 132.217 119.273 C 102.722 142.843 55.268 119.629 64.217 116.835"
  );
  const smile3 = parse(
    "M 132.217 119.273 C 95.907 119.199 54.64 117.449 64.217 116.835"
  );
  const smile4 = parse(
    "M 132.217 119.273 C 95.907 110.691 54.64 116.703 64.217 116.835"
  );
  const smile5 = parse(
    "M 132.217 119.273 C 101.069 85.892 55.891 110.691 64.217 116.835"
  );

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

  const smile = useAnimatedProps(() => {
    const d = interpolatePath(
      lvl.value,
      [1, 2, 3, 4, 5],
      [smile5, smile4, smile3, smile2, smile1]
    );
    return {
      d,
      strokeWidth: lvl.value,
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
      <AnimatedPath animatedProps={smile} stroke="#00000000" fill="#fff" />
    </Svg>
  );
};

export default Smile;
