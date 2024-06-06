import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useState, useEffect } from 'react';
import { Theme } from '../constants/Theme';
import { RequestConfig } from '../constants/fetch.js';
import OwnText from '../components/OwnText';
import { useFonts } from 'expo-font';
import { UserAxios as ua } from '../helpers/OwnAxios';
import * as ss from 'expo-secure-store';
import NavHome from '../views/NavHome';
import { router } from 'expo-router';
const Home = () => {
  const [data, setData] = useState({});
  const [dataIsPending, setDataIsPending] = useState(null);
  const [dataError, setDataError] = useState(null);
  const [cView, setCView] = useState('home');
  const [id, setId] = useState(null);
  const [hasHome, setHasHome] = useState(true);
  const [hasMyc, setHasMyc] = useState(false);
  const [hasSearch, setHasSearch] = useState(false);
  const [hasQuiz, setHasQuiz] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [currentRemove, setCurrentRemove] = useState({ f: setHasHome });
  const url = `http://${RequestConfig.host}:${RequestConfig.port}/api`;
  let userController = new AbortController();
  useEffect(() => {
    ss.getItemAsync('userId').then((res) => {
      setId(res);
    });
  }, []);
  useEffect(() => {
    if (id) {
      ua.getById(`${url}/user`, id, userController.signal)
        .then((res) => {
          setData(res.user);
        })
        .catch((err) => {
          setDataIsPending(true);
          setDataError(err);
        });
    }
  }, [id]);
  const [fontsLoaded] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
  });
  useEffect(() => {
    if (hasHome) {
      setCView('home');
    }
    if (hasProfile) {
      router.navigate('Profile');
    }
  }, [hasHome, hasMyc, hasQuiz, hasSearch, hasProfile]);
  const CurrentView = (props) => {
    const { data, dataIsPending, dataError } = props;
    if (cView === 'home') {
      return (
        <NavHome
          data={data}
          dataIsPending={dataIsPending}
          dataError={dataError}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Theme.colors.black}
        barStyle="light-content"
      />
      <CurrentView
        data={data}
        dataError={dataError}
        dataIsPending={dataIsPending}
      />
      <View style={styles.navigationBar}>
        <ItemNavigationBar
          has={hasHome}
          option="home"
          toTrue={setHasHome}
          toFalse={currentRemove}
          current={setCurrentRemove}
        />
        <ItemNavigationBar
          has={hasMyc}
          option="myc"
          toTrue={setHasMyc}
          toFalse={currentRemove}
          current={setCurrentRemove}
        />
        <ItemNavigationBar
          has={hasSearch}
          option="search"
          toTrue={setHasSearch}
          toFalse={currentRemove}
          current={setCurrentRemove}
        />
        <ItemNavigationBar
          has={hasQuiz}
          option="quiz"
          toTrue={setHasQuiz}
          toFalse={currentRemove}
          current={setCurrentRemove}
        />
        <ItemNavigationBar
          has={hasProfile}
          option="profile"
          toTrue={setHasProfile}
          toFalse={currentRemove}
          current={setCurrentRemove}
        />
      </View>
    </View>
  );
};
const ItemNavigationBar = ({ has, option, toTrue, toFalse, current }) => {
  let imgs = {
    home: require('../assets/home.svg'),
    myc: require('../assets/myc.svg'),
    search: require('../assets/search.svg'),
    quiz: require('../assets/quiz.svg'),
    profile: require('../assets/user.svg'),
  };
  let variations = {
    home: require('../assets/home_variation.svg'),
    myc: require('../assets/myc_variation.svg'),
    search: require('../assets/search_variation.svg'),
    quiz: require('../assets/quiz_variation.svg'),
    profile: require('../assets/user_variation.svg'),
  };
  let txt = {
    home: 'Inicio',
    myc: 'Mis cursos',
    search: 'Buscar',
    quiz: 'Dudas',
    profile: 'Mi cuenta',
  };
  const handleOnPress = () => {
    toTrue(true);
    toFalse.f(false);
    current({ f: toTrue });
  };
  if (has) {
    return (
      <TouchableOpacity
        style={styles.itemNavigationBar}
        onPress={handleOnPress}
      >
        <View style={styles.itemNavigationBar}>
          <Image
            source={variations[option]}
            style={{ width: 30, height: 30 }}
          />
          <OwnText primary>{txt[option]}</OwnText>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.itemNavigationBar}
        onPress={handleOnPress}
      >
        <View style={styles.itemNavigationBar}>
          <Image source={imgs[option]} style={{ width: 30, height: 30 }} />
          <OwnText gray>{txt[option]}</OwnText>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.black,
    flex: 1,
    paddingHorizontal: 30,
  },
  navigationBar: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 80,
  },
  itemNavigationBar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
});

export default Home;
