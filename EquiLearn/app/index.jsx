import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import * as ss from 'expo-secure-store';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Theme } from '../constants/Theme';
import { Image } from 'expo-image';
import OwnText from '../components/OwnText';
import { useFonts } from 'expo-font';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  useEffect(() => {
    ss.getItemAsync('userId')
      .then((res) => {
        if (res) {
          setTimeout(() => {
            setIsLoading(false);
            router.navigate('Home');
          }, 3000);
        } else {
          setTimeout(() => {
            setIsLoading(false);
            router.navigate('CallToAction');
          }, 3000);
        }
      })
      .catch((e) => {
        setError(e);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content "
      />
      {isLoading && (
        <View style={styles.container}>
          <Image
            source={require('../assets/loading.gif')}
            rate={1.5}
            autoplay
            isLooping
            contentFit="scale-down"
            alt="EquiLearn Icon"
            style={styles.icon}
          />
          <OwnText bold big primary>
            Cargando...
          </OwnText>
        </View>
      )}
      {error && <Text style={{ color: 'f14' }}>Error</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    borderRadius: 10,
    width: 400,
    height: 130,
  },
});

export default Index;
