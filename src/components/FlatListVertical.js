import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    img: require('../../assets/images/vendom.jpg'),
    text: 'Venom Let There Be Carnage',
    btn1: 'HORROR',
    btn2: 'MYSTERY',
    btn3: 'THRILER',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 2,
    img: require('../../assets/images/king.jpg'),
    text: 'The Kings Man',
    btn1: 'HORROR',
    btn2: 'MYSTERY',
    btn3: 'THRILER',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 3,
    img: require('../../assets/images/spi.jpg'),
    text: 'The Kings Man',
    btn1: 'HORROR',
    btn2: 'MYSTERY',
    btn3: 'THRILER',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 4,
    img: require('../../assets/images/king.jpg'),
    text: 'The Kings Man ',
    btn1: 'HORROR',
    btn2: 'MYSTERY',
    btn3: 'THRILER',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 5,
    img: require('../../assets/images/image3.png'),
    text: 'The Kings Man ',
    btn1: 'HORROR',
    btn2: 'MYSTERY',
    btn3: 'THRILER',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 6,
    img: require('../../assets/images/image3.png'),
    text: 'The Kings Man ',
    btn1: 'HORROR',
    btn2: 'MYSTERY',
    btn3: 'THRILER',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
];

const RenderItem = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigate('Detailes', {item})}>
      <Image source={item.img} style={styles.img} />
      <View style={styles.AllContent}>
        <Text style={styles.text}>{item.text}</Text>
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
      </View>
    </Pressable>
  );
};

const FlatlistVertiacl = () => {
  return (
    <View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        style={styles.flat}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={data => data.id}
      />
    </View>
  );
};
export default FlatlistVertiacl;

const styles = StyleSheet.create({
  flat: {
    width: '91%',
    alignSelf: 'center',
    paddingBottom: 100,
  },
  container: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  img: {
    borderRadius: 7,
    width: 85,
    height: 128,
  },
  txt: {
    fontSize: 14,
  },
  content: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  btn: {
    width: 64,
    height: 18,
    backgroundColor: '#DBE3FF',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 3,
    alignItems: 'center',
  },
  AllContent: {
    marginHorizontal: 10,
    paddingHorizontal: 7,
  },
  textBtn: {
    fontSize: 9,
    color: '#88A4E8',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Mulish-Bold',
    fontWeight: '700',
    color: '#000',
  },
});
