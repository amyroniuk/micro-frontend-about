import React from 'react';
import {Button, View} from 'react-native';
import * as Frontends from '../../../frontends';

export default function Dashboard({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        {Object.entries(Frontends).map(([key, routes]) => {
          return (
            <View key={key}>
              <Button
                title={routes[0].name}
                onPress={() => navigation.navigate(routes[0].route)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
