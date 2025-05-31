import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Link href="/avisos">-Entrar-</Link>
      <Link href="./signup">-Sign Up-</Link>
      <Link href="./forgot-pass">-Olvide mi contraseña-</Link>
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
