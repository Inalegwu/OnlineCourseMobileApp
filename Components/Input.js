import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function Input({
  placeholder,
  secureTextEntry,
  style,
  autofocus,
  onChangeText,
  submit,
}) {
  const [text, setText] = useState("");
  return (
    <TextInput
      style={style}
      returnKeyType="done"
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoFocus={autofocus}
      enablesReturnKeyAutomatically={true}
      onSubmitEditing={(text) => {
        submit(text);
      }}
    />
  );
}

const styles = StyleSheet.create({});
