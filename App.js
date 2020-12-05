import React, { useState } from "react";
import Slider from "react-native-smooth-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

const SmileApp = () => {
  const [size, setSize] = useState(1);

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
      <Text>Value: {size}</Text>
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
