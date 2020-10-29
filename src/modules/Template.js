import React from 'react';
import {Button, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const FrontendHomeScreen = ({navigation}) => {
  return (
    <>
      <View>
        <Text>This is a template of microfrontend</Text>
        <Button
          title="Frontend Template Child page"
          onPress={() => navigation.navigate('TemplateFrontendChild')}
        />
      </View>
    </>
  );
};

const FrontendChildScreen = () => {
  return (
    <>
      <View>
        <Text>This is a microfrontend child screen</Text>
      </View>
    </>
  );
};

const Frontend = () => {
  return (
    <Stack.Navigator initialRoute="TemplateFrontend">
      <Stack.Screen name="FrontendHome" component={FrontendHomeScreen} />
      <Stack.Screen
        name="TemplateFrontendChild"
        component={FrontendChildScreen}
      />
    </Stack.Navigator>
  );
};

export default {
  name: 'Frontend Template',
  route: 'TemplateFrontend',
  component: Frontend,
};
