import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const LogIn = () => {
  return (
    <View>
      <Text>Hola!</Text>
      <TouchableOpacity onPress={() => router.navigate('/logOut')}>
        <Text>Regresar al LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
