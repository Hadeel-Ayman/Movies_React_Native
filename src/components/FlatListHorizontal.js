import {FlatList, Image, View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    img: require('../../assets/images/spi.jpg'),
    text: 'Spiderman: No Way',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 2,
    img: require('../../assets/images/Eternals.jpg'),
    text: 'Eternals',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 3,
    img: require('../../assets/images/spi.jpg'),
    text: 'Spiderman: No Way',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 4,
    img: require('../../assets/images/Eternals.jpg'),
    text: 'Spiderman: No Way',
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
      <Text style={styles.txt}>{item.text} </Text>
    </Pressable>
  );
};
const Flatlist = () => {
  return (
    <View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.flat}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={data => data.id}
      />
    </View>
  );
};
export default Flatlist;

const styles = StyleSheet.create({
  flat: {
    width: '91%',
    alignSelf: 'center',
  },
  container: {
    paddingHorizontal: 5,
  },
  img: {
    borderRadius: 7,
    marginBottom: 10,
    width:143,
    height:212
  },
  txt: {
    fontSize: 14,
    fontFamily: 'Mulish-Bold',
    fontWeight: '700',
    color: '#000',
  },
});
