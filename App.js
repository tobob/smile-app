import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-native-smooth-slider";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

const SmileApp = () => {
  const lvl = useSharedValue(3);
  const [size, setSize] = useState(3);

  useEffect(() => {
    lvl.value = withSpring(size);
  }, [size]);

  const text = useMemo(() => {
    return {
      1: "worst",
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

  return (
    <View style={styles.container}>
      <Slider
        value={size}
        useNativeDriver={true}
        onValueChange={(value) => setSize(value)}
        maximumValue={5}
        minimumValue={1}
        step={1}
      />
      <Animated.Text style={[styles.text, style]}>{text}</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 40,
    marginLeft: 10,
    marginRight: 10,
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
