import { Drawer } from 'expo-router/drawer';
import { Colors } from '@src/constants';
import SidebarDrawerComponent from '@src/routes/SidebarDrawerComponent';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import DrawerHeaderLeft from '@src/routes/DrawerHeaderLeft';
import DrawerHeaderRight from '@src/routes/DrawerHeaderRight';

const DrawerLayout = () => {
  const isDarkMode = false;

  const CustomDrawer = (props: DrawerContentComponentProps) => (
    <SidebarDrawerComponent
      navigation={props.navigation}
      state={props.state}
      descriptors={props.descriptors}
    />
  );

  const headerStyle = {
    backgroundColor: isDarkMode ? Colors.night400 : Colors.gray200,
    borderBottomWidth: 1,
    borderBottomColor: isDarkMode ? Colors.gray100 : Colors.gray100,
  };

  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          width: '75%',
        },
        drawerItemStyle: {
          borderBottomWidth: 0.5,
          borderColor: Colors.gray400,
        },
        drawerStatusBarAnimation: 'slide',
        overlayColor: 'rgba(0, 0, 0, 0.6)', // Set the overlay color to black with 80% opacity
        drawerActiveBackgroundColor: Colors.gray200,
        // drawerInactiveTintColor: isDarkMode ? Colors.red300 : Colors.gray500,
        headerLeft: () => <DrawerHeaderLeft />,
        headerRight: () => <DrawerHeaderRight />,
        headerTitle: '',
      }}
      drawerContent={(props) => CustomDrawer(props)}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          title: 'HYBRENT TECHNOLOGIES',

          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              style={{ marginRight: -24 }}
              name='office-building'
              color={
                focused
                  ? isDarkMode
                    ? Colors.black
                    : Colors.black
                  : isDarkMode
                    ? Colors.black
                    : Colors.gray700
              }
              size={22}
            />
          ),
          headerStyle,
        }}
      />
      <Drawer.Screen
        name='screen'
        options={{
          title: 'Language',
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              style={{ marginRight: -24 }}
              name='globe'
              color={
                focused
                  ? isDarkMode
                    ? Colors.black
                    : Colors.black
                  : isDarkMode
                    ? Colors.black
                    : Colors.gray700
              }
              size={22}
            />
          ),
          headerStyle,
        }}
      />
      <Drawer.Screen
        name='screen 2'
        options={{
          title: 'Secure your Keka App',
          drawerIcon: ({ focused }) => (
            <Entypo
              style={{ marginRight: -24 }}
              name='key'
              color={
                focused
                  ? isDarkMode
                    ? Colors.black
                    : Colors.black
                  : isDarkMode
                    ? Colors.black
                    : Colors.gray700
              }
              size={22}
            />
          ),
          headerStyle,
        }}
      />

      <Drawer.Screen
        name='screen 3'
        options={{
          title: 'Theme',
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              style={{ marginRight: -24 }}
              name='palette-outline'
              color={
                focused
                  ? isDarkMode
                    ? Colors.black
                    : Colors.black
                  : isDarkMode
                    ? Colors.black
                    : Colors.gray700
              }
              size={22}
            />
          ),
          headerStyle,
        }}
      />

      <Drawer.Screen
        name='screen 4'
        options={{
          title: 'Send Feedback',
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              style={{ marginRight: -24 }}
              name='message-alert-outline'
              color={
                focused
                  ? isDarkMode
                    ? Colors.black
                    : Colors.black
                  : isDarkMode
                    ? Colors.black
                    : Colors.gray700
              }
              size={22}
            />
          ),
          headerStyle,
        }}
      />

      <Drawer.Screen
        name='screen 5'
        options={{
          title: 'Logout',
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              style={{ marginRight: -24 }}
              name='logout'
              color={
                focused
                  ? isDarkMode
                    ? Colors.black
                    : Colors.black
                  : isDarkMode
                    ? Colors.black
                    : Colors.gray700
              }
              size={22}
            />
          ),
          headerStyle,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
