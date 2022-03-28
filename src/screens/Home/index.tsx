import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Background } from "../../components/Background";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";

import { Load } from "../../components/Load";

import { CategorySelect } from "../../components/CategorySelect";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>();
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  function handleCateroySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCateroySelect}
      />

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas Agendadas"
            subtitle={`Total ${appointments?.length}`}
          />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Background>
  );
}
