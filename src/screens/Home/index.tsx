import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da MD10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da MD10",
    },
  ];

  function handleCateroySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCateroySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
