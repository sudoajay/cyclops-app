import { ScrollView } from 'react-native';

type LayoutDefaultProps = {
  children: React.ReactNode;
};

const LayoutDefault = ({ children }: LayoutDefaultProps): JSX.Element => {
  const isDarkMode = false;

  return (
    <ScrollView className={isDarkMode ? 'bg-night-300' : 'bg-gray-100'}>
      {children}
    </ScrollView>
  );
};

export default LayoutDefault;
