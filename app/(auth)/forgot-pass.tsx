import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ForgotPass() {
  return (
    <View style={styles.container}>
      <Text>Olvide mi contraseña</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
