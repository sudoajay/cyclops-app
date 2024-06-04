import { View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

// let's get the globals
import { Colors } from '@src/constants';

// common components
import BaseText from '@components/common/BaseText';

import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SidebarDrawerComponentProps {
  navigation: DrawerContentComponentProps['navigation'];
  state: DrawerContentComponentProps['state'];
  descriptors: DrawerContentComponentProps['descriptors'];
}

const SidebarDrawerComponent = ({
  navigation,
  state,
  descriptors,
}: SidebarDrawerComponentProps): JSX.Element => {
  // get the theme
  const isDarkMode = false;

  const BottomSection = () => (
    <View className='flex flex-row justify-between mx-4 mb-2 p-2'>
      <BaseText className='font-medium text-lg'>Cyclops</BaseText>
      <BaseText className='text-gray-800 text-base'>v 1.0.0</BaseText>
    </View>
  );

  return (
    <View className={`flex-1 ${isDarkMode ? 'bg-night-400' : 'bg-gray-200'}`}>
      <Link href='/(tabs)' asChild>
        <TouchableOpacity onPress={() => {}}>
          <View className=' mt-[52]  flex flex-row items-center mx-4'>
            <Ionicons
              name={'person-circle-sharp'}
              size={32}
              color={Colors.blue500}
            />
            <View className='ml-2'>
              <BaseText className='text-gray-600 text-lg font-medium'>
                Mayank Dikshit
              </BaseText>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <View className='flex-1 mt-3'>
        <DrawerItemList
          navigation={navigation}
          state={state}
          descriptors={descriptors}
        />
      </View>

      <BottomSection />
    </View>
  );
};

export default SidebarDrawerComponent;
