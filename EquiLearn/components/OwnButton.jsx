import { TouchableOpacity, StyleSheet } from 'react-native';
import OwnText from './OwnText';
import { Theme } from '../constants/Theme';
const OwnButton = ({ children, addStyle, onP }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, ...addStyle }}
    >
      <OwnText dark big>
        {children}
      </OwnText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.bluePrimary,
    borderRadius: Theme.sizes.radius.primary,
    padding: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
});
export default OwnButton;
