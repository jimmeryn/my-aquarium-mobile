import React from 'react';
import { Text, Pressable } from 'react-native';

export const Button = ({
    onPress = () => { },
    title = '',
    style = {
        button: {},
        text: {}
    }
}) => (
    <Pressable style={style.button} onPress={onPress}>
        <Text style={style.text}>{title}</Text>
    </Pressable>
);
