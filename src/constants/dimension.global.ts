import { useWindowDimensions } from 'react-native';

/**
 *
 * @param percent
 * @returns
 */
const hp = (percent: number) => {
  const { height } = useWindowDimensions();
  return (percent * height) / 100;
};

/**
 *
 * @param percent
 * @returns
 */
const wp = (percent: number) => {
  const { width } = useWindowDimensions();
  return (percent * width) / 100;
};

export default {
  hp,
  wp,
};
