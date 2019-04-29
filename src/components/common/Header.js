//Import librariries for making a component
import React from "react";
import { Text, View } from "react-native";

//Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    paddingTop: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },

  textStyle: {
    fontSize: 20
  }
};
//Make the component available to other parts of the App
export {Header};
