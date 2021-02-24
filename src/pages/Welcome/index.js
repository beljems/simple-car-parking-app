import React, {useState, useEffect} from 'react';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Page from '../../components/Page';
import Loading from '../../components/Loading';
import * as theme from '../../theme';
import styles from './welcome.css';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate('Login');
    }, 1000);
    
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, [])

  return (
    loading ? (
      <Loading />
    ) : (
      <Page 
        showHeader={false}
        showSetting={false}
        showFooter={false}>
        <View style={styles.content}>
          <View style={styles.inner}>
            <View style={styles.iconWrap}>
              <Text style={styles.iconParking}>
                <Icon name="parking" size={theme.SIZES.icon40} color={theme.COLORS.white} />
              </Text>
              <Text style={styles.iconArrow}>
                <IconEntypo name="triangle-down" size={theme.SIZES.icon40} color={theme.COLORS.lighterRed} />
              </Text>
            </View>
            <View style={styles.headingWrap}>
              <Text style={styles.heading}>ezParking</Text>
            </View>
          </View>
        </View>
      </Page>
    )
  );
};

export default Home;
