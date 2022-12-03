// 3 Ways to Add Image Icon Inside Navigation Bar in React Native
// https://aboutreact.com/react-native-image-icon-inside-navigation-bar/

import React from 'react';

import { View, Image } from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={require("../assets/UON.jpeg")}
        style={{
          width: 100,
          height: 50,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

export default ActionBarImage;
