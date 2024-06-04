import { useColorScheme } from 'react-native';

import { Colorss } from '@constants/Colorss';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colorss.light & keyof typeof Colorss.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colorss[theme][colorName];
  }
}
