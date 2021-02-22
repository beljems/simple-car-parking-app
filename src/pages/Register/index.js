import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Page from './../../components/Page';
import InputField from './../../components/InputField';
import SelectField from './../../components/SelectField';
import Button from './../../components/Button';
import styles from './Register.css';

const Register = ({navigation}) => {
  const [isAgree, setIsAgree] = useState(false);
  const gender = ["Male", "Female"];

  const handleAgree = () => {
    setIsAgree(prevState => !prevState)
  }

  return (
    <Page 
      showHeader={true}
      showFooter={true}
      scrollView={true}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View style={styles.headingWrap}>
            <TouchableOpacity
              onPress={() => navigation.pop()}>
              <Text style={styles.back}>
                <Icon name="arrowleft" size={30} color="#fff" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Sign Up</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <InputField 
                label={'First Name'}
                style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <InputField 
                label={'Last Name'}
                style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <InputField 
                label={'Email Address'}
                style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <InputField 
                label={'Username'}
                style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <InputField 
                label={'Mobile Number'}
                style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <SelectField 
                label={'Gender'}
                data={gender}
              />
            </View>
            <View style={styles.inputGroup}>
              <InputField 
                type={'password'}
                label={'Password'}
                style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <InputField 
                type={'password'}
                label={'Confirm Password'}
                style={styles.input} />
            </View>
            <View style={[styles.inputGroup, styles.inputGroupTerms]}>
              {isAgree && (
                <Text style={styles.agree}>
                  <Icon name="checksquare" size={18} color="#fff" />
                </Text>
              )}
              <Text 
                onPress={() => handleAgree()}
                style={styles.check}></Text>
              <Text style={styles.terms}>
                By clicking this box, you agree with our terms of service.</Text>
            </View>
          </View>
          <View style={styles.buttonWrap}>
            <Button 
              text={'Sign Up'}
              onPress={() => navigation.navigate('Home')} />
          </View>
          
          <View style={styles.create}>
            <Text style={styles.createText}>Already have an account?</Text> 
            <TouchableOpacity 
              onPress={() => navigation.pop()}
              style={styles.createLink}>
              <Text style={styles.createLinkText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Register;
