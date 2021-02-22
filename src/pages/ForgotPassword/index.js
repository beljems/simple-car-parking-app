import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Page from './../../components/Page';
import InputField from './../../components/InputField';
import Button from './../../components/Button';
import styles from './ForgotPassword.css';

const ForgotPassword = ({navigation}) => {
  return (
    <Page 
      showHeader={true}
      showFooter={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View style={styles.headingWrap}>
            <TouchableOpacity
              onPress={() => navigation.pop()}>
              <Text style={styles.back}>
                <Icon name="arrowleft" size={30} color="#fff" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Forgot Password?</Text>
          </View>
          <Text style={styles.desc}>Enter the email address associated with your account.</Text>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <InputField 
                label={'Email Address'}
                style={styles.input} />
            </View>
          </View>
          <View style={styles.buttonWrap}>
            <Button 
              onPress={() => Alert.alert('Please check your email.')} />
          </View>
        </View>
      </View>
    </Page>
  );
};

export default ForgotPassword;
