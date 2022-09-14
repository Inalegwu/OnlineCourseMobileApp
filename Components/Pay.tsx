import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Paystack } from "react-native-paystack-webview";

export default function Pay({ amount, navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <Paystack onCancel={() => {}} onSuccess={() => {}} autoStart={true} />
    </View>
  );
}

const styles = StyleSheet.create({});
