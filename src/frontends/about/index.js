import React from 'react';
import {View, Text} from 'react-native';

const About = () => {
    return (
        <>
            <View>
                <Text>About app...</Text>
            </View>
        </>
    );
};

const Routes = [
    {
        name: 'About',
        route: 'About',
        component: About,
    },
];

export default Routes;
