import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class ToolBar extends React.Component{
  render (){
    return (
      <View style={styles.toolBar}>
        <View style={[styles.backButton ]}>
          <TouchableHighlight
            underlayColor={'white'}
            onPress={this.onBackPress}>
            <Text style={styles.textToolBar}>Atrás</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.title]}>
          <Text style={styles.textToolBarTitle}>Gitapp</Text>
        </View>
        <View style={[styles.backButton]}>
        </View>
      </View>
    )
  }
  onBackPress(){
      this.props.navigator.pop();
  }
  border(color) {
    return {
      borderColor: color,
      borderWidth: 1,
    }
  }
};

var styles = StyleSheet.create({
  toolBar: {
    flexDirection: 'row',
    paddingTop: 20,

  },
  textToolBar: {
    fontSize: 14
  },
  textToolBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    flex: 5,
    alignItems: 'center'
  },
  backButton: {
    flex: 1,
    alignItems: 'center',
  },
});

module.exports = ToolBar;
