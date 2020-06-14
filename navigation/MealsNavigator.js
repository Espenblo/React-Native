import { Platform } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    });

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
}, {

    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />);
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favs: {
        screen: FavNavigator, navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor,
        }
    }
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(
            tabScreenConfig, {
            activeColor: 'white',
            shifting: true,

        })
        : createBottomTabNavigator(
            tabScreenConfig,
            {
                tabBarOptions: {
                    activeTintColor: Colors.accentColor,
                }

            });

export default createAppContainer(MealsFavTabNavigator);