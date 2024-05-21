import {
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Image } from 'expo-image';
import { Theme } from '../constants/Theme';
import OwnText from '../components/OwnText';
import { useFonts } from 'expo-font';

const Home = () => {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  const IMAGES = {
    mat: require('../assets/matematicas.svg'),
    fis: require('../assets/fisica.svg'),
  };
  const COLORS = {
    mat: Theme.colors.red,
    fis: Theme.colors.green,
    qui: Theme.colors.blue,
    lan: Theme.colors.orange,
  };
  const DATA = [
    {
      type: 'mat',
      name: 'Algebra',
    },
    {
      type: 'fis',
      name: 'Óptica',
    },
    {
      type: 'fis',
      name: 'Electromagnetismo',
    },
    {
      type: 'qui',
      name: 'Orgánica',
    },
  ];
  const Item = ({ type, name }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.listContainer,
          backgroundColor: COLORS[type],
          borderColor: COLORS[type],
        }}
      >
        <View>
          <Image
            contentFit="cover"
            source={IMAGES[type]}
            style={styles.imageSubject}
          />
          <OwnText
            dark
            style={{
              backgroundColor: Theme.colors.black,
              padding: 5,
              width: '100%',
            }}
          >
            {name}
          </OwnText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content"
      />
      <View style={styles.containerHeader}>
        <TouchableOpacity>
          <View style={styles.containerHeader}>
            <Image source={require('../assets/user.svg')} style={styles.icon} />
            <View>
              <OwnText tertiary medium>
                Omar Ramirez ...
              </OwnText>
              <OwnText gray>omarramhdz16@gmai.com</OwnText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <OwnText big bold dark style={{ marginTop: 20 }}>
        Cursos:
      </OwnText>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item type={item.type} name={item.name} />}
        numColumns={2}
        keyExtractor={(item, i) => i}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.black,
    flex: 1,
    paddingHorizontal: 30,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  listContainer: {
    width: '45%',
    margin: '1.5%',
    borderWidth: 2,
    justifyContent: 'center',
  },
  imageSubject: {
    width: '100%',
    height: 180,
  },
});

export default Home;
