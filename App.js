import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-native-smooth-slider";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

const SmileApp = () => {
  const lvl = useSharedValue(3);
  const [size, setSize] = useState(3);

  useEffect(() => {
    lvl.value = withSpring(size);
  }, [size]);

  const text = useMemo(() => {
    return {
      1: "bad",
      2: "don't like",
      3: "neutral",
      4: "like",
      5: "love",
    }[size];
  }, [size]);

  const style = useAnimatedStyle(() => {
    return {
      fontSize: 10 + 4 * lvl.value,
      fontWeight: (400 + 100 * Math.round(lvl.value - 1)).toString(),
    };
  });

  const background = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        lvl.value,
        [1, 3, 5],
        ["#c52c27", "#228B22", "#00BFFF"]
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, background]}>
      <Slider
        value={size}
        useNativeDriver={true}
        onValueChange={(value) => setSize(value)}
        maximumValue={5}
        minimumValue={1}
        step={1}
      />
      <Animated.Text style={[styles.text, style]}>{text}</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    paddingTop: 60,
    padding: 40,
    alignItems: "stretch",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  value: {
    textAlign: "center",
  },
});

export default SmileApp;
