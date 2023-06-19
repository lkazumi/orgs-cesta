import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../telas/Home";
import Produtor from "../telas/produtor";

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ ComponentePrincipal = Home }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
  );
}
