import {
  View,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import { Theme } from '../constants/Theme';
import { Image } from 'expo-image';
import OwnText from '../components/OwnText';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';

const Course = () => {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  const DATA = [
    { title: 'Suma', data: ['¿Que es?', 'Tema 2 bla bla', 'Tema 333333333'] },
    {
      title: 'Resta',
      data: ['Tema 11111111', 'Tema 2222222222222', 'Tema 333333333'],
    },
    {
      title: 'Multiplicación',
      data: ['Tema 111111', 'Tema 22222222', 'Tema 333333'],
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => router.navigate('Home')}>
          <Image
            source={require('../assets/back.svg')}
            contentFit="cover"
            style={{ height: 50, width: 50 }}
          />
        </TouchableWithoutFeedback>
        <OwnText style={{ color: Theme.colors.red }} big bold>
          Algebra
        </OwnText>
        <OwnText medium dark>
          1/10
        </OwnText>
      </View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.itemCont}
            onPress={() => router.navigate('Lesson')}
          >
            <View style={styles.item}>
              <OwnText dark medium>
                {item}
              </OwnText>
              <View style={styles.emojis}>
                {index === 0 ? <OwnText medium>✅</OwnText> : null}
                <OwnText medium>😁</OwnText>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <OwnText big bold primary style={{ marginBottom: 20 }}>
            {title}
          </OwnText>
        )}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemCont: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 2,
    borderWidth: 2,
    borderColor: Theme.colors.gray,
    borderRadius: Theme.sizes.radius.exaggerated,
  },
  emojis: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Course;
