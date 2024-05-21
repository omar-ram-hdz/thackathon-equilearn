import { View, StyleSheet } from 'react-native';
import OwnText from '../OwnText.jsx';
import BigIcon from '../BigIcon.jsx';

const HeaderForm = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <BigIcon
        style={{ width: 40, height: 40, objectFit: 'scale-down' }}
        alt="EquiLearn Icon"
      />
      <OwnText primary bold big>
        EquiLearn
      </OwnText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0,
  },
});
export default HeaderForm;
