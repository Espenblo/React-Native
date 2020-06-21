import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import { useSelector, useDispatch } from "react-redux";
import {toggleFavorite} from '../store/actions/meal';

const ListItemIng = (props) => {
  return (
    <View style={styles.ListItemIng}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const ListItemStep = (props) => {
  return (
    <View style={styles.ListItemStep}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const availabelMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");

  const currentMealIsFavorite= useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));

  const selectedMeal = availabelMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav:toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  
  useEffect(() => {
    props.navigation.setParams({isFav:currentMealIsFavorite });
  }, [currentMealIsFavorite]);



  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItemIng key={ingredient} style={styles.list}>
          {ingredient}
        </ListItemIng>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItemStep key={step}>
          {index + 1}. {step}
        </ListItemStep>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 150,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  ListItemIng: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  ListItemStep: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
});

export default MealDetailsScreen;
