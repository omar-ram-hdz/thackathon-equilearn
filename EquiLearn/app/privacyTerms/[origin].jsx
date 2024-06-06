import {
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Image } from 'expo-image';
import { useLocalSearchParams, router } from 'expo-router';
import { useEffect } from 'react';
import { Theme } from '../../constants/Theme';
import OwnText from '../../components/OwnText';
const PrivacyTerms = () => {
  const { origin } = useLocalSearchParams();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () =>
      router.navigate(origin),
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback
          style={styles.backButton}
          onPress={() => {
            router.navigate(origin);
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/back.svg')}
              contentFit="cover"
              style={{ height: 50, width: 50 }}
            />
            <OwnText dark medium>
              Regresar
            </OwnText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <OwnText style={{ marginTop: 80 }} primary big bold>
        Política de privacidad
      </OwnText>
      <ScrollView>
        <OwnText>
          Nuestra aplicación móvil de cursos académicos se compromete a proteger
          la privacidad de nuestros usuarios.
        </OwnText>
        <OwnText>
          No compartimos información personal con terceros sin su
          consentimiento.
        </OwnText>
        <OwnText>
          Los datos recopilados se utilizan únicamente para mejorar la
          experiencia del usuario y ofrecer contenido relevante.
        </OwnText>
        <OwnText>
          En nuestra plataforma, promovemos retos de equidad de género y nos
          comprometemos a proporcionar igualdad de oportunidades para todos los
          usuarios, independientemente de su género.
        </OwnText>
        <OwnText>
          No toleramos la discriminación y estamos comprometidos a garantizar
          que nuestro contenido y nuestras interacciones sean inclusivos y
          respetuosos para todos.
        </OwnText>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    paddingBottom: 4,
    top: 0,
    left: 0,
    right: 0,
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Theme.colors.black,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  backButton: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default PrivacyTerms;
