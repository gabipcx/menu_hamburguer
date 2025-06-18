
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from '../src/styles/HomeScreenStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notícias di guê? - Abril </Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Simulação de dados de notícias
const newsData = [
  { id: '1', title: 'Davi Brito grava um video pulando em uma anã e viraliza', description: 'Anã se pronuncia no TikTok e é feita de chacota.' },
  { id: '2', title: 'O advogado Davi Brito acaba de prender Jojo Todynho por abuso de autoridade', description: 'A audiência vai acontecer nessa sexta-feira.' },
  { id: '3', title: 'Dicas para botar a banana no peito e ir pu só', description: 'Ex-BBB Davi faz tutorial nas redes sociais sobre.' },
  { id: '4', title: 'Novas atualizações sobre a família Brito', description: 'Raquel Brito foi sequestrada por um macaco prego e esta vivendo na selva do Imalaia.' },
  { id: '5', title: 'Viagens para o final de semana', description: 'Davi Brito da opiniões sobre onde viajar nesse final de semana por conta do clima.' },
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

