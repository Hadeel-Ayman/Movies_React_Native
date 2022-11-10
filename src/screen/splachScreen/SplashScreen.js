import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import styles from './style';
import {View, Image} from 'react-native';
const img = require('../../../assets/images/splash.png');
const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('BottomNavigtion');
    }, 3000);
  });
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
    </View>
  );
};
export default Splash;
