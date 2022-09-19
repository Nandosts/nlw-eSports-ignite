import React, { useRef, useEffect } from "react";

import { Background } from "./src/components/Background";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import type { Subscription } from "expo-modules-core";
import * as Notifications from "expo-notifications";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

import "./src/services/notificationConfigs";
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";

export default function App() {
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("receivedListener", notification);
      });

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((notification) => {
        console.log("response", notification);
      });

    if (
      getNotificationListener.current &&
      responseNotificationListener.current
    ) {
      Notifications.removeNotificationSubscription(
        getNotificationListener.current
      );
      Notifications.removeNotificationSubscription(
        responseNotificationListener.current
      );
    }
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  return (
    <Background>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
