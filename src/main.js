import React from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import Search from './components/search';
import Dashboard from './components/dashboard';

var ROUTES = {
  search: Search,
  dashboard: Dashboard,
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} title={route.title} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          // No funciona el title
          title: 'Github Social',
          name: 'search'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;} }
        />
    );
  }
});

var styles = StyleSheet.create ({
  container: {
    flex: 1
  }
});
