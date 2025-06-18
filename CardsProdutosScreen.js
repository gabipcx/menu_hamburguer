import React from 'react';
import { View, Text,  FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../src/styles/CardsProdutosScreenStyles';

const produtos = [
  { id: '1', nome: 'Produto 1', imagem: 'https://cdn-images.farfetch-contents.com/18/47/55/61/18475561_39735113_1000.jpg', preco: 'R$ 50,00' },
  { id: '2', nome: 'Produto 2', imagem: 'https://cdn-images.farfetch-contents.com/29/88/01/81/29880181_58945400_1000.jpg', preco: 'R$ 70,00' },
  { id: '3', nome: 'Produto 3', imagem: 'https://cdn-images.farfetch-contents.com/19/53/11/23/19531123_43673115_1000.jpg', preco: 'R$ 90,00' }
];

const CardsProdutosScreen = ({ navigation }) => {
  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};


export default CardsProdutosScreen;

