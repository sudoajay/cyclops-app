import { ReactNode } from 'react';
import { Text, TextStyle, TextProps, StyleProp } from 'react-native';

interface BaseTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

const BaseText = ({
  className,
  style,
  numberOfLines,
  children,
  allowFontScaling,
  ellipsizeMode,
  onLayout,
  onLongPress,
  onPress,
  onTextLayout,
  selectable,
  selectionColor,
  adjustsFontSizeToFit,
  minimumFontScale,
  suppressHighlighting,
}: BaseTextProps) => {
  return (
    <Text
      className={className}
      style={style} // Customize default style
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      ellipsizeMode={ellipsizeMode}
      onLayout={onLayout}
      onLongPress={onLongPress}
      onPress={onPress}
      onTextLayout={onTextLayout}
      selectable={selectable}
      selectionColor={selectionColor}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      minimumFontScale={minimumFontScale}
      suppressHighlighting={suppressHighlighting}
    >
      {children}
    </Text>
  );
};
export default BaseText;
