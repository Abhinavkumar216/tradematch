import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/src/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};


export function ThemedSurface2({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'Surface2');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
export function ThemedSurface1({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'Surface1');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
