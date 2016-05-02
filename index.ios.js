/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component
} from 'react-native';
import App from './src/components/app';

class socialFlixNative extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('socialFlixNative', () => socialFlixNative);
