import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import CountryCodeList from 'react-native-country-code-list'
import styles from './CountryCode.css';

const CountryCode = () => {
  return (
    <CountryCodeList
	  onClickCell={(cellObject) => console.log(cellObject)}
	  />
  )
}

export default CountryCode;
