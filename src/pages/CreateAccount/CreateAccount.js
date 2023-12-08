import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccount() {
  const navigation = useNavigation();

  const goToAuthScreens = () => {
    navigation.navigate('AuthScreens');
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.headerText}>Crie sua Conta</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome Completo</Text>
        <TextInput
          placeholder="Digite seu nome completo..."
          style={styles.input}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite seu email..." style={styles.input} />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={goToAuthScreens}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EEE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headerText: {
    color: '#72AB86',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerForm: {
    backgroundColor: '#72AB86',
    borderRadius: 15,
    padding: 20,
    width: '80%',
  },
  title: {
    color: '#F4EEE7',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F4EEE7',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F4EEE7',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#72AB86',
    fontWeight: 'bold',
  },
});
