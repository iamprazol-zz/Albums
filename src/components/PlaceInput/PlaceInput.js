
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const placeInput = (props) => {
    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if(props.placeName.trim() === ""){
            return;
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="An Awesome Place"
                value={props.placeName}
                onChangeText={this.placeNameChangedHandler}
                style={styles.placeInput}
            />
            <Button
                title="Add"
                style={styles.buttonInput}
                onPress={this.placeSubmitHandler}
            />
        </View>
    );
};


const styles = StyleSheet.create({

    inputContainer: {
        //flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    placeInput: {
        width: "70%",
    },
    buttonInput: {
        width: "30%",
    },
});

export default placeInput;