import * as React from 'react';
import {webview} from 'react-native-webview';

export default function App() {
  return (
    <webview
    style={style.container}
    source={{ uri:'https:expo.dev'}}
    />
  );
}