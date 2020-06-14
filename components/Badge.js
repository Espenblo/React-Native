import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Badge = (props) => {

    return (
        <View style={styles.test} >
            <Text style={(props.counted >= props.req ? styles.achi : styles.unAchi)}>{props.counted}</Text> 
        </View >
    );

};

const styles = StyleSheet.create({
    unAchi: {
        color: 'black',
    },
    achi: {
        color: "red",
    },
   

});

export default Badge;