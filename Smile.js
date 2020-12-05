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
import { View } from "react-native";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Smile = ({ lvl }) => {
  const star1 = useSharedValue(0);
  const drop = useSharedValue(0);

  useEffect(() => {
    star1.value = repeat(
      withTiming(60, {
        duration: 500,
        easing: Easing.in(Easing.linear),
      }),
      -1,
      true
    );
    drop.value = repeat(
      withTiming(100, {
        duration: 1500,
        easing: Easing.inOut(Easing.linear),
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
        {
          scale: interpolate(
            star1.value,
            [0, 100, 180, 260, 360],
            [1, 1.4, 2.3, 1, 1]
          ),
        },
      ],
    };
  });

  const dropProps = useAnimatedProps(() => {
    return {
      cy: drop.value,
      fill: interpolateColor(
        drop.value,
        [0, 10, 50, 90, 100],
        ["#1414EF00", "#1414EF50", "#1414EFFF", "#1414EF50", "#1414EF00"]
      ),
    };
  });

  const dropOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: `${interpolate(lvl.value, [1, 2, 3, 5], [100, 40, 0, 0])}%`,
    };
  });

  const starColor1 = useAnimatedProps(() => {
    const fill = interpolateColor(
      lvl.value,
      [1, 2, 3, 5],
      ["#ffff0000", "#ffff0000", "#ffff0000", "#ffff00FF"]
    );
    return {
      fill,
    };
  });

  return (
    <View>
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
            right: 50,
            top: 40,
          },
          star1Style,
        ]}
        viewBox="0 0 50 65"
        xmlns="http://www.w3.org/2000/svg"
        height={70}
        width={70}
      >
        <AnimatedPath
          d="M46.109 36.929l-14.857 1.79-3.484 14.553-6.293-13.576-14.918 1.183 10.967-10.181-5.735-13.822 13.072 7.284 11.373-9.724-2.89 14.682z"
          animatedProps={starColor1}
        />
      </AnimatedSvg>
      <AnimatedSvg
        style={[{ position: "absolute", left: 60, top: 150 }, dropOpacityStyle]}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        height={100}
        width={100}
      >
        <AnimatedCircle cx={50} animatedProps={dropProps} r={7} />
      </AnimatedSvg>
    </View>
  );
};

export default Smile;
