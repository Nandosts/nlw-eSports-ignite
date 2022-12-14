import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { Background } from "../../components/Background";

import logoImg from "../../assets/logo-nlw-esports.png";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    axios("http://192.168.1.38:3333/games").then((response) =>
      setGames(response.data)
    );
  }, []);

  return (
    <Background>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image source={logoImg} style={styles.logo} />
          <Heading
            title="Encontre seu duo!"
            subtitle="Selecione o game que deseja jogar..."
          />

          <FlatList
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GameCard onPress={() => handleOpenGame(item)} data={item} />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentList}
          />
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
}
