import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import styles from './Loading.css';

const Loading = () => {
  return (
    <SafeAreaView style={styles.wrap}>
      <ActivityIndicator 
        size="large" 
        color="#42c2f5" />
    </SafeAreaView>
  );
};

export default Loading;
