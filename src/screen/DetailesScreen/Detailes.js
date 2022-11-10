import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ScrollViewComonent from '../../components/ScrollView';
import RowLine from '../../components/row';
const ItemDetails = () => {
  const {params} = useRoute();
  const {item} = params;

  const RowDescription = props => {
    return (
      <View style={styles.column}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.proparety}>{props.property}</Text>
      </View>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={item.img} style={styles.img} />
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.BottomSheet}>{item.text}</Text>
            <TouchableOpacity>
              <Fontisto name="bookmark" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textBtn}>{item.btn1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textBtn}>{item.btn2}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textBtn}>{item.btn3}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <RowDescription name="Length" property="2h 28min" />
            <RowDescription name="Language" property="English" />
            <RowDescription name="Rating" property="PG-13" />
          </View>

          <View style={styles.description}>
            <Text style={styles.des}>Description</Text>
            <Text style={styles.paragrah}>{item.description}</Text>
          </View>
          <RowLine text={'Cast'} />
          <ScrollViewComonent />
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemDetails;
