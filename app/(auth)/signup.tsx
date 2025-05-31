import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Link href="./login">Iniciar sesion</Link>
      <Text>Registrarse</Text>
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
