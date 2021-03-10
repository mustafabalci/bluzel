import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import icons from '../constants/icons';
import {
  WardrobeScreen,
  ClothesScreen,
  CombineScreen,
  FeedScreen,
} from '../screens';

const Tabs = () => {
  const TabsNavigation = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    labelStyle: {
      fontSize: 14,
    },
    activeTintColor: '#00e676',
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      backgroundColor: '#FFFFFF',
      borderTopColor: 'transparent',
      height: 60,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = '';
      let text = '';

      switch (route.name) {
        case 'Wardrobe':
          icon = icons.wardrobe_icon;
          text = 'Gardrop';
          break;

        case 'Clothes':
          icon = icons.clothes_icon;
          text = 'Kıyafetler';
          break;

        case 'Combine':
          icon = icons.combine_icon;
          text = 'Kombinler';
          break;

        default:
          icon = icons.feed_icon;
          text = 'Akış';
      }

      return (
        <View style={styles.tabIconContainer}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: focused ? '#5c3551' : '#919191',
            }}
          />
          <Text style={{ color: focused ? '#5c3551' : '#919191' }}>{text}</Text>
        </View>
      );
    },
  });

  return (
    <TabsNavigation.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
      initialRouteName="Wardrobe">
      <TabsNavigation.Screen name="Wardrobe" component={WardrobeScreen} />
      <TabsNavigation.Screen name="Clothes" component={ClothesScreen} />
      <TabsNavigation.Screen name="Combine" component={CombineScreen} />
      <TabsNavigation.Screen name="Feed" component={FeedScreen} />
    </TabsNavigation.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tabs;
