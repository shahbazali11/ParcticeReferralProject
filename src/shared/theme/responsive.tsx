import {Dimensions, PixelRatio} from 'react-native';

const scrWidth = Dimensions.get('window').width;
const scrHeight = Dimensions.get('window').height;
const widthPercentageToDP = (widthPercent: any )=> {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((scrWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: any )=> {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((scrHeight * elemHeight) / 100);
};

export {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
  scrWidth,
  scrHeight,
};
