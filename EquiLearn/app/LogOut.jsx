import { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import HeaderForm from '../components/form/HeaderForm.jsx';
import OwnText from '../components/OwnText.jsx';
import OwnButton from '../components/OwnButton.jsx';
import { Theme } from '../constants/Theme.js';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';

const LogOut = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <HeaderForm />
      <View style={styles.ctaText}>
        <OwnText primary bold big>
          Estudia. Aprende.
        </OwnText>
        <OwnText big addStyle={{ flexDirection: 'row' }}>
          Iniciar Sesión en{' '}
          <OwnText bold big>
            EquiLearn
          </OwnText>
        </OwnText>
      </View>
      {/* <HeaderForm />
      <View style={styles.ctaText}>
        <OwnText primary bold big>
          Estudia. Aprende.
        </OwnText>
        <OwnText bold big>
          Iniciar Sesión en{' '}
          <OwnText primary bold big>
            EquiLearn
          </OwnText>
        </OwnText>
      </View>
      <SafeAreaView style={styles.form}>
        <View>
          <OwnText big>Correo</OwnText>
          <TextInput
            style={styles.input}
            onChangeText={(nt) => setMail(nt)}
            placeholder="hola@equilearn.com"
            placeholderTextColor={Theme.colors.gray}
            value={mail}
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
        <OwnButton onP={() => Alert.alert('Mensaje', 'Hola !')}>
          {'Iniciar Sesión'}
        </OwnButton>
      </SafeAreaView>
      <OwnText medium>
        ¿No tienes cuenta?{' '}
        <TouchableWithoutFeedback onPress={() => router.navigate('LogIn')}>
          <OwnText medium primary bold>
            Registrarse
          </OwnText>
        </TouchableWithoutFeedback>
      </OwnText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingHorizontal: 20,
  },
  ctaText: {
    marginTop: 25,
  },
  form: {
    marginTop: 150,
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
