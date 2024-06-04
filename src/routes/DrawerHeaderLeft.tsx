import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
// globals
import { Colors } from '@src/constants';

// common
import BaseText from '@src/components/common/BaseText';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    marginLeft: 10,
  },
});

const DrawerHeaderLeft = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Link href='/(tabs)' asChild>
        <TouchableOpacity onPress={() => {}}>
          <View className=' flex flex-row items-center'>
            <Ionicons
              name={'person-circle-sharp'}
              size={32}
              color={Colors.blue500}
            />
            <View className='ml-2'>
              <BaseText className='text-gray-600 text-lg font-medium'>
                Welcome Mayank Dikshit
              </BaseText>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default DrawerHeaderLeft;
