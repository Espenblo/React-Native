import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText style={styles.title}>The Game is over</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/original.png')}
                    // source={{uri: 'https://www.success.com/wp-content/uploads/2019/12/How-to-Align-Your-Career-With-Your-Personal-Definition-of-Success-1024x682.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <BodyText style={styles.resultText}> 
                Your phone needed 
                <Text style={styles.highlight}> {props.roundsNumber} </Text>
                rounds to guess the number
                <Text style={styles.highlight}> {props.userNumber} </Text>
            </BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 28,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 15,
    }
});

export default GameOverScreen;