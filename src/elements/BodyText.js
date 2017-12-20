import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      // <View>とはHtmlで言うと<div>のようなもの
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

// react-nativeで宣言は'const'か'let'。基本'const'
const styles = StyleSheet.create({
/* Htmlで言う所のオブジェクトと同じこと
var styles = {
  text:{}
}
var x = {key:value}
*/
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});


// 他の構造体でBodyTextが使えるようになる
export default BodyText;
