import { TouchableOpacity, StyleSheet } from 'react-native';
import OwnText from './OwnText';
import { Theme } from '../constants/Theme';
const OwnButton = ({ children, style, onPress, textPrimary }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.button, ...style }}>
      {textPrimary ? (
        <OwnText dark big primary>
          {children}
        </OwnText>
      ) : (
        <OwnText dark big>
          {children}
        </OwnText>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.bluePrimary,
    borderRadius: Theme.sizes.radius.primary,
    padding: 9,
    alignItems: 'center',
    textAlign: 'center',
  },
});
export default OwnButton;
