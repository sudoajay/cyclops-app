import React from 'react';
import { Pressable, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@src/constants';
import BaseText from './BaseText';

interface PressableTextProps {
  onClick: () => void;
  text: string | undefined;
  style?: ViewStyle | (({ pressed }: { pressed: boolean }) => ViewStyle[]);
  textStyle?: TextStyle | (({ pressed }: { pressed: boolean }) => TextStyle);
  numberOfLines?: number;
}

const PressableText = ({
  onClick,
  style,
  text,
  textStyle,
  numberOfLines,
}: PressableTextProps): React.ReactElement => {
  return (
    <Pressable
      style={({ pressed }) =>
        typeof style === 'function' ? style({ pressed }) : style
      }
      onPress={onClick}
    >
      {({ pressed }) => (
        <BaseText
          numberOfLines={numberOfLines}
          style={[
            {
              color: pressed ? Colors.blue300 : Colors.blue500,
            },
            typeof textStyle === 'function'
              ? textStyle({ pressed })
              : textStyle,
          ]}
        >
          {text}
        </BaseText>
      )}
    </Pressable>
  );
};

export default PressableText;
