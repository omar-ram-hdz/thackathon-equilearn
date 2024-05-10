import { TouchableOpacity, StyleSheet } from 'react-native';
import OwnText from './OwnText';
import { Theme } from '../constants/Theme';
const OwnButton = ({ children, addStyle, onP }) => {
  return (
    <TouchableOpacity onPress={onP} style={{ ...styles.button, ...addStyle }}>
      <OwnText dark bold big>
        {children}
      </OwnText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.bluePrimary,
    borderRadius: Theme.sizes.radius.primary,
  },
});
