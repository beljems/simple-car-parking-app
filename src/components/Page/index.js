import React from 'react';
import {
  View, 
  Text,
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import * as theme from '../../theme';
import styles from './Page.css';

const Page = ({
  showHeader,
  showSetting,
  children,
  showFooter,
  showBack,
  scrollView
}) => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.content}>
        {showHeader === true && (
        <View style={styles.headerWrap}>
          <SafeAreaView>
            <View>
              <Text style={styles.header}>ezParking</Text>
            </View>
            {showSetting === true && (<View style={styles.settingWrap}>
              {showBack === true && (
              <TouchableOpacity 
                onPress={() => navigation.pop()}
                style={styles.back}>
                <Icon name="arrow-back" size={theme.SIZES.icon30} color={theme.COLORS.white} />
              </TouchableOpacity>)}
              <TouchableOpacity 
                style={styles.menu}
                >
                <IconEntypo name="menu" size={theme.SIZES.icon40} color={theme.COLORS.white} />
              </TouchableOpacity>
            </View>)}
          </SafeAreaView>
        </View>)}
        {scrollView === true ? (
          <SafeAreaView>
            <ScrollView style={styles.scrollWrap}>
              <View style={[styles.inner, styles.innerScroll]}>
                {children}
              </View>
            </ScrollView>
          </SafeAreaView>
        ) : (
          <SafeAreaView style={styles.innerWrap}>
            <View style={styles.inner}>{children}</View>
          </SafeAreaView>
        )}
        {showFooter === true && (<View style={styles.footer}></View>)}
      </View>
    </KeyboardAvoidingView>
  );
};

Page.defaultProps = {
  showFooter: true,
  showHeader: true,
  showSetting: false,
  showBack: true,
};

Page.propTypes = {
  showFooter: PropTypes.bool,
  showHeader: PropTypes.bool,
  showSetting: PropTypes.bool,
  showBack: PropTypes.bool,
  scrollView: PropTypes.bool,
};

export default Page;
