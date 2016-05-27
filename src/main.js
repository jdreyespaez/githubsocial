import React from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import Search from './components/search';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Repositories from './components/repositories';
import Web from './components/helpers/web';

var ROUTES = {
  search: Search,
  dashboard: Dashboard,
  profile: Profile,
  repositories: Repositories,
  web: Web,
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} {...route.passProps} title={route.title} navigator={navigator} />;
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
    flex: 1,
    backgroundColor: '#fff'
  }
});
