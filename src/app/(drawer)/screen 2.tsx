import { Image } from 'react-native';

import ParallaxScrollView from '@src/components/common/ParallaxScrollView';
import { ThemedText } from '@src/components/common/ThemedText';

const HomeTab = (): JSX.Element => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@src/assets/images/partial-react-logo.png')}
          style={{
            height: 178,
            width: 290,
            bottom: 0,
            left: 0,
            position: 'absolute',
          }}
        />
      }
    >
      <ThemedText> Hello Screen 2</ThemedText>
    </ParallaxScrollView>
  );
};

export default HomeTab;
