import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Category from '../models/category';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 5,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
    }

});

export default CategoryGridTile;