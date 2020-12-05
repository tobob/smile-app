import React, { useEffect, useState, useMemo } from "react";
import Svg, { Circle, Path } from "react-native-svg";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
  repeat,
  useAnimatedProps,
} from "react-native-reanimated";
import { interpolateColor, parse, interpolatePath } from "react-native-redash";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Smile = ({ lvl }) => {
  const star1 = useSharedValue(0);

  useEffect(() => {
    star1.value = repeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.in(Easing.cubic),
      }),
      -1,
      false
    );
  }, []);

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
    const r = interpolate(lvl.value, [1, 5], [50, 56]);
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
    const d = interpolatePath(lvl.value, [1, 5], [smile5, smile1]);
    return {
      d,
    };
  });

  const star1Style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${star1.value}deg`,
        },
      ],
    };
  });

  const starColor1 = useAnimatedProps(() => {
    const fill = interpolateColor(
      lvl.value,
      [1, 5],
      ["#FFFFFF00", "#FFFFFFFF"]
    );
    return {
      fill,
    };
  });

  const starColor2 = useAnimatedProps(() => {
    const fill = interpolateColor(
      lvl.value,
      [1, 5],
      ["#ffff0000", "#ffff00FF"]
    );
    return {
      fill,
    };
  });

  return (
    <>
      <Svg
        viewBox="0 0 200 200"
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
          cy={80.722}
          animatedProps={eye1}
          fill="#fff"
        />
        <AnimatedCircle cx={112.972} cy={77.028} r={12.972} fill="#fff" />
        <AnimatedPath
          animatedProps={smile}
          stroke="#00000000"
          fill="#0000006f"
        />
      </Svg>

      <AnimatedSvg
        style={[
          {
            position: "absolute",
            left: 70,
          },
          star1Style,
        ]}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        height={200}
        width={200}
      >
        <AnimatedPath
          d="M46.109 36.929l-14.857 1.79-3.484 14.553-6.293-13.576-14.918 1.183 10.967-10.181-5.735-13.822 13.072 7.284 11.373-9.724-2.89 14.682z"
          animatedProps={starColor1}
        />
        <AnimatedPath
          d="M165.74 60.791l-15.463-2.58-7.794 13.602-2.324-15.503-15.346-3.208L138.84 46.1l-1.692-15.586 10.995 11.177 14.3-6.424-7.232 13.91z"
          animatedProps={starColor2}
        />
      </AnimatedSvg>
    </>
  );
};

export default Smile;
