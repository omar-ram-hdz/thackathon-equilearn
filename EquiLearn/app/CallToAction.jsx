import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  Modal,
} from 'react-native';
import HeaderForm from '../components/form/HeaderForm';
import { Image } from 'expo-image';
import { Theme } from '../constants/Theme';
import OwnText from '../components/OwnText';
import OwnButton from '../components/OwnButton';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { router } from 'expo-router';

const CallToAction = () => {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  const [modalVisible, setModalVisible] = useState(false);
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
        }}
        onPress={courseHandleClick}
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
              marginBottom: 3,
            }}
          >
            {name}
          </OwnText>
        </View>
      </TouchableOpacity>
    );
  };

  const courseHandleClick = () => setModalVisible(true);

  return (
    <View style={styles.container}>
      <HeaderForm />
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content"
      />
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
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
              Inicia Sesión primero
            </OwnText>
            <OwnButton
              style={{ marginTop: 10 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              Entendido
            </OwnButton>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <OwnText big bold dark style={{ marginTop: 20 }}>
          Cursos:
        </OwnText>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item type={item.type} name={item.name} />}
          numColumns={2}
          keyExtractor={(item, i) => i}
        />
        <View style={styles.space}></View>
      </ScrollView>
      <View style={styles.fixedFooter}>
        <OwnButton onPress={() => router.navigate('LogIn')}>
          Iniciar Sesión
        </OwnButton>
        <OwnButton
          style={{
            backgroundColor: Theme.colors.black,
            borderWidth: 2,
            borderColor: Theme.colors.bluePrimary,
          }}
          onPress={() => router.navigate('/LogOut')}
          textPrimary
        >
          Registrarse
        </OwnButton>
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
  listContainer: {
    width: '45%',
    margin: '1.5%',
    borderWidth: 1.5,
    borderColor: Theme.colors.gray,
    borderRadius: Theme.sizes.radius.medium,
    justifyContent: 'center',
  },
  imageSubject: {
    width: '100%',
    height: 180,
  },
  fixedFooter: {
    flexDirection: 'row',
    position: 'absolute',
    paddingBottom: 4,
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Theme.colors.black,
    zIndex: 1,
  },
  space: {
    height: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainerStyle: {
    alignItems: 'center',
    backgroundColor: Theme.colors.black,
    shadowColor: 'white',
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

export default CallToAction;
