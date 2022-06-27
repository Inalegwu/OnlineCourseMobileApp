import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Input({
  placeholder,
  secureTextEntry,
  style,
  autofocus,
}) {
  return (
    <TextInput
      style={style}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoFocus={autofocus}
    />
  );
}

const styles = StyleSheet.create({});
