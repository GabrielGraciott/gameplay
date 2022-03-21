import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

import { useAuth } from "../../hooks/auth";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se e{`\n`}organize suas{`\n`}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos{" "}
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title={"Entrar com Discord"} onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
