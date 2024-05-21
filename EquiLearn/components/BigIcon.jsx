import { Image } from 'expo-image';

const BigIcon = ({ style, ...otherParams }) => {
  return (
    <Image
      style={style}
      source={require('../assets/icon-big.svg')}
      contentFit="scale-down"
      transition={0}
      {...otherParams}
    />
  );
};

export default BigIcon;
