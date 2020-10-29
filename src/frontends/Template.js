import React from 'react';
import {Button, View, Text} from 'react-native';

const Frontend = ({navigation}) => {
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

const Routes = [
  {
    name: 'Frontend Template Home',
    route: 'TemplateFrontend',
    component: Frontend,
  },
  {
    name: 'Frontend Template Child',
    route: 'TemplateFrontendChild',
    component: FrontendChildScreen,
  },
];

export default Routes;
