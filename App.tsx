import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// Import your global CSS file
import './global.css';

export default function App() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-red-800'>
        Open up App.tsx to start working on your app okkay!
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}
