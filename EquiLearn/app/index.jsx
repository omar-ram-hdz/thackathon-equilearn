import { Text, View } from 'react-native';
import * as ss from 'expo-secure-store';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

const Index = () => {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    ss.getItemAsync('userId')
      .then((res) => {
        setUserId(res);
        if (res === null) {
          router.navigate('/LogOut');
        } else {
          // Index entry
        }
      })
      .catch((e) => {
        setError(true);
      });
  }, []);
  return (
    <View>
      {userId && <Text>Cargando...</Text>}
      {error && <Text style={{ color: 'f14' }}>Error</Text>}
    </View>
  );
};

export default Index;
