import React, { useState } from "react";
import Slider from "react-native-smooth-slider";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

const SmileApp = () => {
  const lvl = useSharedValue(1);
  const [size, setSize] = useState(1);

  const style = useAnimatedStyle(() => {
    return {
      fontSize: 10 + 4 * lvl.value,
    };
  });
  return (
    <View style={styles.container}>
      <Slider
        value={size}
        useNativeDriver={true}
        onValueChange={(value) => (lvl.value = value)}
        maximumValue={5}
        minimumValue={1}
        step={1}
      />
      <Animated.Text style={style}>Something</Animated.Text>
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
});

export default SmileApp;
