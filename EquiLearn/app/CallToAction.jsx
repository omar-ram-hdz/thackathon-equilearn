import {
  View,
  StyleSheet,
  StatusBar,
  BackHandler,
  Alert,
  ScrollView,
} from 'react-native';
import { useEffect } from 'react';
import { Image } from 'expo-image';
import { Theme } from '../constants/Theme';
import OwnText from '../components/OwnText';
import OwnButton from '../components/OwnButton';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';

const CallToAction = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('¡Queeeee!', '¿Estas seguro de salir de EquiLearn?', [
        {
          text: 'NO',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Si', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '8%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 13,
        }}
      >
        <Image
          source={require('../assets/favicon.svg')}
          contentFit="scale-down"
          style={styles.icon}
        />
        <OwnText primary bold big>
          EquiLearn
        </OwnText>
      </View>

      <ScrollView>
        <Image
          source={require('../assets/cta_1.png')}
          contentFit="scale-down"
          style={styles.images}
          alt="Tree people"
        />
        <OwnText bold big center>
          ¿List@ para empezar a aprender?
        </OwnText>
        <OwnText medium center>
          Inicia sesión o regístrate para acceder todos los cursos de EquiLearn.
        </OwnText>
        <OwnButton
          style={{ width: '70%', marginHorizontal: 'auto', marginVertical: 5 }}
          onPress={() => router.navigate('LogIn')}
        >
          Iniciar Sesión
        </OwnButton>
        <View style={styles.space}></View>
        <Image
          source={require('../assets/cta_2.png')}
          contentFit="scale-down"
          style={styles.images}
          alt="Tree people"
        />
        <OwnText bold big center>
          Tu puedes mejorar en cualquier materia
        </OwnText>
        <OwnText medium center>
          EquiLearn esta pensado para ayudar tanto alumnos regulares como
          irregulares.
        </OwnText>
        <View style={styles.space}></View>
        <Image
          source={require('../assets/cta_3.png')}
          contentFit="scale-down"
          style={styles.images}
          alt="Tree people"
        />
        <OwnText bold big center>
          ¿Se te hace difícil tu carrera técnica?
        </OwnText>
        <OwnText medium center>
          EquiLearn puede ser tu gran aliado en las materias de tu especialidad.
        </OwnText>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  icon: {
    width: 45,
    height: 45,
  },
  images: {
    width: '100%',
    height: 250,
    backgroundColor: '#e6e5e5',
  },
  space: {
    marginBottom: 15,
  },
});

export default CallToAction;
