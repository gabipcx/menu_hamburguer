import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, handleLogin, localStyles } from 'react-native';
import styles from '../src/styles/AboutScreenStyles';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sobre my cute app</Text>
            <Text style={styles.text}>Versão 5.0</Text>
            <Text style={styles.text}>Desenvolvido por gabi lindoka</Text>


            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Visite nosso sitezinho bb</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entre em contato !!</Text>
            </TouchableOpacity>

            <Text style={styles.betania}>&copy; 2025 gabi lindoka. Todos os direitos reservados.</Text>
            
            
            <View style={styles.navbar}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.navText}>Início</Text>
         
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.navText}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




