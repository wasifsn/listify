import React from 'react';
import {Text, View, Stylesheet, Image, StyleSheet} from 'react-native';
// import {Header} from 'react-native/Libraries/NewAppScreen';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title} </Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};
const styles = StyleSheet.create({
  header: {height: 60, padding: 15, backgroundColor: 'darkslateblue'},
  text: {fontSize: 20, color: '#fff', textAlign: 'center'},
});

export default Header;
