import React from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';


const GitHubWebView = () => {
  return (
    <SafeAreaView style={{ width:'100%', height: '100%' }}>
    <WebView 
      source={{ uri: 'https://github.com/JK11751' }} 
      onLoad={console.log('Loaded')}
      />
  </SafeAreaView>
  );
};

export default GitHubWebView;
