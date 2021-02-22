import React, {useState, useEffect} from 'react';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Page from '../../components/Page';
import Loading from '../../components/Loading';
import styles from './welcome.css.js';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate('Login');
    }, 2000);
    
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
                <Icon name="parking" size={40} color="#fff" />
              </Text>
              <Text style={styles.iconArrow}>
                <IconEntypo name="triangle-down" size={35} color="#42c2f5" />
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
