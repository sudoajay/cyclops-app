import React, { ReactNode } from 'react';
import { Pressable, ViewStyle, StyleSheet } from 'react-native';

interface PressableButtonProps {
  onClick: () => void;
  style?: ViewStyle | (({ pressed }: { pressed: boolean }) => ViewStyle[]);
  children?: ReactNode; // Define children using ReactNode type
  disabled?: boolean;
}

const PressableButton = ({
  onClick,
  style,
  children,
  disabled = false,
}: PressableButtonProps): React.ReactElement => {
  const getButtonStyle = ({ pressed }: { pressed: boolean }) => {
    if (typeof style === 'function') {
      return (style as ({ pressed }: { pressed: boolean }) => ViewStyle)({
        pressed,
      });
    }
    return style;
  };
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        styles.PressableButtonStyle,
        getButtonStyle({ pressed }),
      ]}
      disabled={disabled}
    >
      {children}
    </Pressable>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  PressableButtonStyle: {
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    paddingVertical: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
