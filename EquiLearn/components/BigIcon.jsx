import { Image } from 'expo-image';

const BigIcon = ({ addStyle, ...otherParams }) => {
  return (
    <Image
      style={addStyle}
      source={require('../assets/icon-big.svg')}
      contentFit="cover"
      transition={0}
      {...otherParams}
    />
  );
};

export default BigIcon;
