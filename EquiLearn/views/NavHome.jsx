import {
  View,
  StyleSheet,
  BackHandler,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import { Theme } from '../constants/Theme';
import PROFILE_IMAGES from '../constants/profile_picture.js';
import COURSE_IMAGES from '../constants/course_images.js';
import OwnText from '../components/OwnText';
import { RequestConfig } from '../constants/fetch';
import { CourseAxios as ca } from '../helpers/OwnAxios';
const NavHome = (props) => {
  const { data, dataIsPending, dataError } = props;
  const [courses, setCourses] = useState({ courses: [] });
  const [coursesIsPending, setCoursesIsPending] = useState(true);
  const [coursesError, setCoursesError] = useState(false);
  const [imageProfile, setImageProfile] = useState(null);
  let courseController = new AbortController();
  const url = `http://${RequestConfig.host}:${RequestConfig.port}/api`;
  const getCourses = (grade) => {
    setCoursesIsPending(true);
    ca.getAll(`${url}/courses`, grade, courseController.signal)
      .then((res) => {
        console.log(res);
        try {
          if (res.courses.length) {
            setTimeout(() => {
              setCourses(res.courses);
              setCoursesIsPending(false);
            }, 1000);
          }
        } catch (err) {
          throw err;
        }
      })
      .catch((err) => {
        console.log(err);
        setCoursesError(true);
      });
    setTimeout(() => {
      setCoursesIsPending(false);
      setCoursesError(true);
    }, 6000);
  };
  useEffect(() => {
    if (data.full_name) {
      try {
        if (data.profile_image) {
          setImageProfile(PROFILE_IMAGES[data.profile_image - 1]);
        }
        if (data.grade) {
          getCourses(data.grade);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [data]);
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
  const courseHandlePress = () => {
    router.navigate('Course');
  };

  const Item = ({ image, name }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.listContainer,
          backgroundColor: Theme.colors.gray,
          borderColor: Theme.colors.bluePrimary,
        }}
        onPress={courseHandlePress}
      >
        <View>
          <Image
            contentFit="scale-down"
            source={COURSE_IMAGES[image - 1]}
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
    <View>
      {dataError && (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../assets/404.png')}
            rate={1.5}
            autoplay
            isLooping
            contentFit="scale-down"
            alt="EquiLearn Icon"
            style={styles.notFound}
          />
          <OwnText medium center>
            Estamos teniendo problemas
          </OwnText>
        </View>
      )}
      {!dataIsPending && (
        <View style={styles.containerHeader}>
          <TouchableOpacity>
            <View style={styles.containerHeader}>
              <Image source={imageProfile} style={styles.icon} />
              <View>
                <OwnText tertiary medium>
                  {data.full_name}
                </OwnText>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <OwnText big bold dark style={{ marginTop: 20 }}>
        Cursos:
      </OwnText>
      {(dataIsPending || coursesIsPending) && (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../assets/loading.gif')}
            rate={1.5}
            autoplay
            isLooping
            contentFit="scale-down"
            alt="EquiLearn Icon"
            style={styles.iconLoading}
          />
        </View>
      )}
      {courses.length && !coursesIsPending && (
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <Item image={item.image} name={item.name} />
          )}
          numColumns={2}
          keyExtractor={(item, i) => i}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  icon: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  iconLoading: {
    width: 300,
    height: 130,
  },
  notFound: {
    width: 400,
    height: 400,
    backgroundColor: 'white',
  },
});
export default NavHome;
