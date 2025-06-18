import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles/LoginScreenStyles';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'aluno' && password === 'Senai1234') {
      navigation.navigate('Home');
    } else if (username === 'root' && password === 'root') {
      navigation.navigate('AdminHome');
    } else {
      setErrorMessage('Usuário ou senha incorretos.');
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Cadastro');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  
return (
    <View style={styles.container}>
      {/* Balão estilizado */}
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
      <Image source={require('../assets/pack-png-108-jungkook-bts-1-icon-png-icon.jpg')} style={styles.image} />
        </View>
      </View>
  
      {/* Título */}
      <Text style={styles.title}>Bem-vindo!</Text>
  
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
  
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
  
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Cadastre-se</Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}


  
