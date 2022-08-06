import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

interface Props {
  placeholder: string;
  secureTextEntry: boolean;
  style: Object;
  autofocus: boolean;
  submit?: void;
}

export default function Input({
  placeholder,
  secureTextEntry,
  style,
  autofocus,
  submit,
}: Props) {
  return (
    <TextInput
      style={style}
      returnKeyType="done"
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoFocus={autofocus}
      enablesReturnKeyAutomatically={true}
      onChange={({ nativeEvent }) => {
        submit(nativeEvent.text);
      }}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({});
