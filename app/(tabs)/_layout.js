import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const mainColor = Colors[colorScheme ?? 'light'].mainColor;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: mainColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="website"
        options={{
          title: 'Site da prefeitura',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="web" color={color} />,
        }}
      />
      <Tabs.Screen
        name="modules"
        options={{
          title: 'Modulos',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="view-module" color={color} />,
        }}
      />
      <Tabs.Screen
        name="modules-example"
        options={{
          tabBarStyle: { display: 'none' }, // Hide tab for this screen
        }}
      />

    </Tabs>
  );
}
