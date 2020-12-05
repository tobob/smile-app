import React from "react";
import Slider from "react-native-smooth-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

class SliderExample extends React.Component {
  state = {
    value: 1,
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          useNativeDriver={true}
          onValueChange={(value) => this.setState({ value })}
          maximumValue={5}
          minimumValue={1}
          step={1}
        />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

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

export default SliderExample;
