import React from "react";

import { Background } from "./src/components/Background";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <Background>
      <StatusBar style="auto" />
    </Background>
  );
}
