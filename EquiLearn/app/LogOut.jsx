import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import HeaderForm from '../components/form/HeaderForm.jsx';
import OwnText from '../components/OwnText.jsx';
import OwnButton from '../components/OwnButton.jsx';
import { Theme } from '../constants/Theme.js';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';

const LogOut = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <HeaderForm />
          <View style={styles.ctaText}>
            <OwnText primary bold big>
              Estudia. Aprende.
            </OwnText>
            <OwnText big addStyle={{ flexDirection: 'row' }}>
              Registrarse en{' '}
              <OwnText bold big>
                EquiLearn
              </OwnText>
            </OwnText>
          </View>
          <View style={styles.form}>
            <View>
              <OwnText big>Correo</OwnText>
              <TextInput
                style={styles.input}
                onChangeText={(nt) => setMail(nt)}
                placeholder="hola@equilearn.com"
                placeholderTextColor={Theme.colors.gray}
                value={mail}
                keyboardType="email"
              />
            </View>

            <View>
              <OwnText big>Nombre</OwnText>
              <TextInput
                style={styles.input}
                onChangeText={(nt) => setName(nt)}
                placeholder="Pedro Pascal"
                placeholderTextColor={Theme.colors.gray}
                value={name}
                keyboardType="default"
              />
            </View>

            <View>
              <OwnText big>Contraseña</OwnText>
              <TextInput
                style={styles.input}
                onChangeText={(nt) => setPass(nt)}
                placeholder="secret1234"
                placeholderTextColor={Theme.colors.gray}
                value={pass}
              />
            </View>

            <View style={{ marginTop: 50 }}>
              <OwnButton
                onPress={() =>
                  Alert.alert('Mensaje de EquiLearn', 'Hola! esto ya funciona')
                }
              >
                Registrarse
              </OwnButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ marginTop: 20 }}>
        <OwnText medium center>
          ¿Ya tienes cuenta?{' '}
          <TouchableWithoutFeedback onPress={() => router.navigate('LogIn')}>
            <OwnText medium primary bold>
              Iniciar Sesión
            </OwnText>
          </TouchableWithoutFeedback>
        </OwnText>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ctaText: {
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  form: {
    marginTop: 20,
    marginBottom: 50,
  },
  inputText: {
    marginBottom: 50,
  },
  input: {
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderRadius: Theme.sizes.radius.medium,
  },
});
export default LogOut;
