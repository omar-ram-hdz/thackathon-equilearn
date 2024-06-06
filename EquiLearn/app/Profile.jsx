import {
  StatusBar,
  View,
  StyleSheet,
  TextInput,
  BackHandler,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect } from 'react';
import OwnText from '../components/OwnText';
import { Theme } from '../constants/Theme';
import PROFILE_IMAGES from '../constants/profile_picture';
import { UserAxios as ua } from '../helpers/OwnAxios';
import * as ss from 'expo-secure-store';
const Profile = () => {
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
            router.navigate('Home');
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/back.svg')}
              contentFit="cover"
              style={{ height: 50, width: 50 }}
            />
            <OwnText dark medium>
              Regresar
            </OwnText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableOpacity
        onPress={() => {
          ss.deleteItemAsync('userId').finally(() => {
            router.navigate('/');
          });
        }}
        style={{
          backgroundColor: Theme.colors.red,
          padding: 10,
          marginTop: 100,
        }}
      >
        <OwnText dark medium>
          Cerrar sesión
        </OwnText>
      </TouchableOpacity>
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
export default Profile;
