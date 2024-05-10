import { Text } from 'react-native';
import { Theme } from '../constants/Theme.js';

const OwnText = ({
  children,
  big,
  bold,
  italic,
  dark,
  primary,
  medium,
  addStyle,
  ...addProps
}) => {
  const styleText = {
    color: primary ? Theme.colors.bluePrimary : dark ? 'fff' : '#000',
    fontSize: big
      ? Theme.sizes.text.big
      : medium
        ? Theme.sizes.text.medium
        : Theme.sizes.text.low,
    fontFamily: bold
      ? Theme.fonts.bold
      : italic
        ? Theme.fonts.italic
        : Theme.fonts.normal,
  };
  return (
    <Text style={{ ...addStyle, ...styleText }} {...addProps}>
      {children}
    </Text>
  );
};

export default OwnText;
