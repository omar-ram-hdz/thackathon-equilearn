import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
} from 'react-native';
import { Image } from 'expo-image';
import HeaderForm from '../components/form/HeaderForm.jsx';
import OwnText from '../components/OwnText.jsx';
import OwnButton from '../components/OwnButton.jsx';
import { Theme } from '../constants/Theme.js';
import { RequestConfig } from '../constants/fetch.js';
import { REGEX, MESSAGES } from '../constants/regular_expressions.js';
import { UserAxios as ua } from '../helpers/OwnAxios.js';
import { useFonts } from 'expo-font';
import * as ss from 'expo-secure-store';
import { router } from 'expo-router';

const LogOut = () => {
  const [mail, setMail] = useState('');
  const [mailError, setMailError] = useState(false);
  const [mailMessageError, setMailMessageError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameMessageError, setNameMessageError] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState(false);
  const [passMessageError, setPassMessageError] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState({ user: {} });
  const [dataError, setDataError] = useState(null);
  let controller = new AbortController();
  const url = `http://${RequestConfig.host}:${RequestConfig.port}/api`;
  useEffect(() => {
    let msg = !REGEX.USER.PASS.min.test(pass)
      ? MESSAGES.PASS.min
      : !REGEX.USER.PASS.upper.test(pass)
        ? MESSAGES.PASS.upper
        : !REGEX.USER.PASS.lower.test(pass)
          ? MESSAGES.PASS.lower
          : !REGEX.USER.PASS.number.test(pass)
            ? MESSAGES.PASS.number
            : !REGEX.USER.PASS.spaces.test(pass)
              ? MESSAGES.PASS.spaces
              : !REGEX.USER.PASS.special.test(pass)
                ? MESSAGES.PASS.special
                : '';
    setPassMessageError(msg);
    if (passMessageError !== '') {
      setPassError(true);
    } else {
      setPassError(false);
    }
  }, [pass, passMessageError]);
  useEffect(() => {
    let msg = !REGEX.USER.NAME.test(name) ? MESSAGES.NAME : '';
    setNameMessageError(msg);
    if (nameMessageError !== '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [name, nameMessageError]);
  useEffect(() => {
    let msg = !REGEX.USER.MAIL.test(mail) ? MESSAGES.MAIL : '';
    setMailMessageError(msg);
    if (mailMessageError !== '') {
      setMailError(true);
    } else {
      setMailError(false);
    }
  }, [mail, mailMessageError]);
  useEffect(() => {
    if (data.id) {
      ss.setItemAsync('userId', data.id)
        .then(() => {
          setIsPending(false);
          router.navigate('Home');
        })
        .catch(() => {
          setIsPending(false);
          Alert.alert(
            'Error',
            'Ocurrió un error. Vuelve a intentarlo más tarde',
            [{ text: 'OK', style: 'cancel' }],
          );
        });
    }
    if (dataError) {
      console.log(dataError);
      if (dataError.error) {
        Alert.alert(
          'Error',
          'Estamos teniendo problemas, Vuelve a intentarlo más tarde',
          [{ text: 'OK', style: 'cancel' }],
        );
      }
      if (dataError.status == false) {
        Alert.alert(
          'Error',
          'Parece que hubo un error, inténtalo de nuevo más tarde.',
          [{ text: 'OK', style: 'cancel' }],
        );
      }
    }
  }, [data, dataError]);
  const handleSubmit = () => {
    if (!mailError && !nameError && !passError) {
      setIsPending(true);
      ua.post(`${url}/user`, pass, mail, name, controller.signal)
        .then((res) => {
          if (!res.id) throw res;
          setDataError(null);
          setData(res);
        })
        .catch((err) => {
          /* setTimeout(() => {
            setDataError(err);
          }, 6100); */
          setDataError(err);
        });
      setTimeout(() => {
        controller.abort();
        controller = new AbortController();
        setIsPending(false);
      }, 6000);
    } else {
      Alert.alert('Error', 'Primero rellena todos los campos correctamente', [
        { text: 'OK', style: 'cancel' },
      ]);
    }
  };
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
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <HeaderForm />
          <View style={styles.ctaText}>
            <OwnText primary bold big>
              Estudia. Aprende.
            </OwnText>
            <OwnText big style={{ flexDirection: 'row' }}>
              Registrarse en{' '}
              <OwnText bold big>
                EquiLearn
              </OwnText>
            </OwnText>
          </View>
          <View style={styles.form}>
            <View>
              <OwnText big>Nombre</OwnText>
              <TextInput
                style={styles.input}
                onChangeText={(nt) => setName(nt)}
                placeholder="Pedro Pascal"
                placeholderTextColor={Theme.colors.gray}
                value={name}
                keyboardType="default"
                autoFocus
              />
              {nameError && (
                <OwnText style={{ color: Theme.colors.red }}>
                  {nameMessageError}
                </OwnText>
              )}
            </View>
            <View>
              <OwnText big>Correo</OwnText>
              <TextInput
                style={styles.input}
                onChangeText={(nt) => setMail(nt)}
                placeholder="hola@equilearn.com"
                placeholderTextColor={Theme.colors.gray}
                value={mail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {mailError && (
                <OwnText style={{ color: Theme.colors.red }}>
                  {mailMessageError}
                </OwnText>
              )}
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
              {passError && (
                <OwnText style={{ color: Theme.colors.red }}>
                  {passMessageError}
                </OwnText>
              )}
            </View>
            <View style={{ marginTop: 50 }}>
              <OwnButton onPress={handleSubmit}>Registrarse</OwnButton>
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
      <Modal animationType="slide" transparent visible={isPending}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerStyle}>
            <Image
              source={require('../assets/loading.gif')}
              rate={1.5}
              autoplay
              isLooping
              contentFit="scale-down"
              alt="EquiLearn Icon"
              style={styles.iconLoading}
            />
            <OwnText bold big primary>
              Cargando...
            </OwnText>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainerStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowOpacity: 0.5,
    shadowRadius: Theme.sizes.radius.primary,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15,
    borderRadius: Theme.sizes.radius.primary,
  },
  iconLoading: {
    borderRadius: 10,
    width: 400,
    height: 130,
  },
});
export default LogOut;
