import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/SignIn";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? (
        <AppRoutes />
      ) : (
        <Navigator
          headerMode="none"
          screenOptions={{
            cardStyle: { backgroundColor: theme.colors.secondary100 },
          }}
        >
          <Screen name="SignIn" component={SignIn} />
        </Navigator>
      )}
    </NavigationContainer>
  );
}
