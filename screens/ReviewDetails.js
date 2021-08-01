import React from 'react';
import { globalStyles } from '../styles/Global';
import { View, Text, Button } from 'react-native';

function ReviewDetails({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={globalStyles.container}>
      <Text>title: {navigation.getParam('title')}</Text>
      <Text>body: {navigation.getParam('body')}</Text>
      <Text>rating: {navigation.getParam('rating')}</Text>
      {/* <Button title="go to home page" onPress={pressHandler} /> */}
    </View>
  );
}

export default ReviewDetails;
