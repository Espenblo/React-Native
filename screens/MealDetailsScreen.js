import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Header } from 'react-native/Libraries/NewAppScreen';

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go to startscreen!" onPress={() => {
                props.navigation.popToTop();
            }} />

        </View>
    );

};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={()=>{
                console.log('mark fav')
            }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default MealDetailsScreen;