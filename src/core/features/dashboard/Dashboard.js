import React from 'react';
import {Button, View, FlatList, Text, StyleSheet} from 'react-native';
import routes from '../../routes';

const Item = ({title, onPress}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Button title="Launch" onPress={onPress} />
  </View>
);

export default function Dashboard({navigation}) {
  const renderItem = ({item}) => (
    <Item title={item.name} onPress={() => navigation.navigate(item.route)} />
  );
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <FlatList
          data={routes}
          renderItem={renderItem}
          keyExtractor={(item) => item.route}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#d4d4d4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});
