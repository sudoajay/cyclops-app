import { Keyboard, TouchableOpacity } from 'react-native';

// impport globals
import { Colors } from '@src/constants';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import {
  DrawerActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
// common

import { FontAwesome } from '@expo/vector-icons';

const DrawerHeaderRight = (): JSX.Element => {
  const isDarkMode = false;
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      className='p-3 px-8  transition-opacity hover:opacity-80'
      onPress={() => {
        Keyboard.dismiss();
        navigation.dispatch(DrawerActions.toggleDrawer());
      }}
    >
      <FontAwesome
        name='bars'
        size={18}
        color={isDarkMode ? Colors.white : Colors.gray500}
      />
    </TouchableOpacity>
  );
};

export default DrawerHeaderRight;
