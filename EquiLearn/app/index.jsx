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
import BigIcon from '../components/BigIcon.jsx';
import OwnText from '../components/OwnText';
import { useFonts } from 'expo-font';

const Index = () => {
  const [userId, setUserId] = useState(null);
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
        if (res === null) {
          setTimeout(() => {
            setIsLoading(false);
            setUserId(res);
            router.navigate('/LogOut');
          }, 2000);
        } else {
          // Index entry
        }
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        /*setIsLoading(false)*/
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content "
      />
      <BigIcon style={styles.icon} />
      {isLoading && (
        <View>
          <OwnText bold big primary>
            Cargando...
          </OwnText>
          <ActivityIndicator size="large" color={Theme.colors.bluePrimary} />
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
    height: 100,
  },
});

export default Index;
