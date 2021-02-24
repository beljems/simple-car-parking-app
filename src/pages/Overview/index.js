import React, {useState} from 'react';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconDesign from 'react-native-vector-icons/AntDesign';
import Page from '../../components/Page';
import Button from '../../components/Button';
import * as theme from '../../theme';
import styles from './overview.css.js';

const Home = ({navigation}) => {
  const [step, setStep] = useState(1);

  const handleClick = () => {
    if(step === 3) {
      navigation.navigate('Home');
      return true;
    };
    setStep(step + 1);
  }
  
  return (
    <Page 
      showHeader={true}
      showSetting={false}>
      <View style={styles.content}>
        <View style={styles.inner}>
          <View style={styles.innerContent}>
            {step === 1 && (
            <>
              <View>
                <Text style={styles.heading}>Parking Places</Text>
                <Text style={styles.desc}>Where you need</Text>
              </View>
              <View style={styles.iconWrap}>
                <Text style={styles.iconParking}>
                  <Icon name="parking" size={theme.SIZES.icon40} color={theme.COLORS.white} />
                </Text>
                <Text style={styles.iconArrow}>
                  <IconEntypo name="triangle-down" size={60} color={theme.COLORS.lighterRed} />
                </Text>
              </View>
            </>)}
              
            {step === 2 && (
            <>
              <View>
                <Text style={styles.heading}>See Vacancy</Text>
                <Text style={styles.desc}>Book and go to it</Text>
              </View>
              <View style={[styles.iconWrap, styles.iconWrapNoBg]}>
                <Text>
                  <Icon name="magnify" size={75} color={theme.COLORS.lighterRed} />
                </Text>
              </View>
            </>)}

            {step === 3 && (
            <>
              <View>
                <Text style={styles.heading}>Easy Pay</Text>
                <Text style={styles.desc}>With credit card or money</Text>
              </View>
              <View style={[styles.iconWrap, styles.iconWrapNoBg]}>
                <Text>
                  <IconDesign name="creditcard" size={60} color={theme.COLORS.lighterRed} />
                </Text>
              </View>
            </>)}
          </View>
        </View>
      </View>
      <Button 
        onPress={handleClick}
        text="Next" />
    </Page>
  )
};

export default Home;
