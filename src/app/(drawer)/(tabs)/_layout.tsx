import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@components/navigation/TabBarIcon';

import { Colors } from '@src/constants';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.blue500,
        headerShown: false,
        tabBarStyle: { paddingBottom: 8, paddingTop: 6, height: 60 },
      }}
      initialRouteName='HOME'
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'HOME',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='inbox'
        options={{
          title: 'INBOX',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'mail' : 'mail-open-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='me'
        options={{
          title: 'ME',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='explore'
        options={{
          title: 'EXPLORE',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'people' : 'people-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
