import React from "react";
import { Image, View } from "react-native";

import DiscordSvg from "../../assets/discord.svg";

import { styles } from "./styles";

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  // "https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png";

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.îmage} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
