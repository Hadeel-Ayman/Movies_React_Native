import {View, Text} from 'react-native';
import styles from './style';
import FlatlistVertiacl from '../../components/FlatListVertical';
import Flatlist from '../../components/FlatListHorizontal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import RowLine from '../../components/row';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Fontisto name="fog" color="black" size={24} />
        <Text style={styles.head}>FilmKu</Text>
        <Ionicons name="notifications-outline" color="black" size={24} />
      </View>

      <RowLine text={'Now Showing'} />

      <Flatlist />
      <View style={{marginTop: 20}}>
        <RowLine text={'Populer'} />
      </View>
      <FlatlistVertiacl />
    </View>
  );
};
export default Home;
