import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import * as theme from '../../theme';
import styles from './Loading.css';

const Loading = () => {
  return (
    <SafeAreaView style={styles.wrap}>
      <ActivityIndicator 
        size="large" 
        color={theme.COLORS.base} />
    </SafeAreaView>
  );
};

export default Loading;
