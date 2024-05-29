import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import OwnText from '../components/OwnText';
import { Theme } from '../constants/Theme';
import { Image } from 'expo-image';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';

const Lesson = () => {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => router.navigate('Course')}>
          <Image
            source={require('../assets/close.svg')}
            style={{ width: '20%', height: 50 }}
            contentFit="cover"
          />
        </TouchableWithoutFeedback>
        <View style={styles.progressBar}>
          <View
            style={{
              ...styles.progressElement,
              backgroundColor: Theme.colors.green,
            }}
          ></View>
          <View
            style={{
              ...styles.progressElement,
              backgroundColor: Theme.colors.green,
            }}
          ></View>
          <View style={styles.progressElement}></View>
          <View style={styles.progressElement}></View>
        </View>
      </View>
      <OwnText big dark style={{ marginVertical: 8 }}>
        ¿Cuál es el resultado de la suma?
      </OwnText>
      <Image
        source={require('../assets/op-example.png')}
        contentFit="cover"
        style={{
          marginTop: '15%',
          marginBottom: 20,
          width: '100%',
          height: 200,
          borderRadius: Theme.sizes.radius.medium,
        }}
      />
      <View style={styles.menuResults}>
        <TouchableOpacity style={styles.resultOption}>
          <OwnText medium style={styles.resultOptionText}>
            190
          </OwnText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resultOption}>
          <OwnText medium style={styles.resultOptionText}>
            1090
          </OwnText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resultOption}>
          <OwnText medium style={styles.resultOptionText}>
            110
          </OwnText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resultOption}>
          <OwnText medium style={styles.resultOptionText}>
            100
          </OwnText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.black,
    flex: 1,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBar: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  progressElement: {
    width: '23%',
    borderRadius: Theme.sizes.radius.medium,
    height: 20,
    backgroundColor: '#333355',
  },
  menuResults: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultOption: {
    width: '46%',
    height: 60,
    backgroundColor: Theme.colors.bluePrimary,
    borderRadius: Theme.sizes.radius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  resultOptionText: {
    color: '#fff',
  },
});

export default Lesson;
