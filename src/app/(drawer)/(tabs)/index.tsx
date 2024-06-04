import { View, TouchableOpacity, ScrollView } from 'react-native';
import LayoutDefault from '@src/components/layout/LayoutDefault';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import BaseText from '@src/components/common/BaseText';
import { Colors } from '@src/constants';

const HomeTab = (): JSX.Element => {
  const buttonData = [
    {
      name: 'plane-departure',
      label: 'Apply Leave',
      iconLibrary: FontAwesome5,
    },
    {
      name: 'file-invoice-dollar',
      label: 'View Payslip',
      iconLibrary: FontAwesome6,
    },
    {
      name: 'ticket',
      label: 'Raise Ticket',
      iconLibrary: FontAwesome6,
    },
    {
      name: 'balance-scale',
      label: 'Leave Balance',
      iconLibrary: FontAwesome5,
    },
  ];

  return (
    <LayoutDefault>
      <View className='p-4'>
        <View className='mt-6 flex-row justify-around'>
          {buttonData.map((button, index) => (
            <TouchableOpacity
              key={index}
              className='items-center'
              style={{ marginBottom: 20 }}
            >
              <View className='p-4 bg-gray-300 rounded-full'>
                <button.iconLibrary
                  name={button.name}
                  size={20}
                  color={Colors.gray600}
                />
              </View>
              <BaseText
                className='text-gray-600 mt-2 text-center'
                numberOfLines={2}
                style={{ width: 60 }}
              >
                {button.label}
              </BaseText>
            </TouchableOpacity>
          ))}
        </View>

        <View className='mt-6 bg-gray-300 p-4 rounded-lg'>
          <BaseText className='text-gray-600'>
            SHIFT TODAY : GENERAL (04:30 PM - 08:00 PM)
          </BaseText>
          <View className='flex-row items-center justify-between mt-4'>
            <BaseText className='text-gray-600'>28 May Tuesday</BaseText>
            <BaseText className='text-gray-600'>0h / 9h</BaseText>
          </View>
          <TouchableOpacity className='mt-4 bg-blue-500 p-3 rounded-lg  items-center text-center'>
            <BaseText className='text-white'>Clock In</BaseText>
          </TouchableOpacity>
        </View>

        <ScrollView className='mt-6'>
          <BaseText className='text-gray-600 mt-4'>Off this week</BaseText>
        </ScrollView>
      </View>
    </LayoutDefault>
  );
};

export default HomeTab;
