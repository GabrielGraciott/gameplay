import React from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelecte: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelecte }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lolzim",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Vava",
      icon: null,
      owner: true,
    },
    {
      id: "3",
      name: "CS",
      icon: null,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild onPress={() => handleGuildSelecte(item)} data={item} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
