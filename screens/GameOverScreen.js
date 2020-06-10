import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ScrollView, SafeAreaView } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <SafeAreaView>
            <ScrollView>
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
                    <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 28,
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
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
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
        marginVertical: Dimensions.get('window').height / 40,
    }
});

export default GameOverScreen;