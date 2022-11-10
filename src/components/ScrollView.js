import {Image, View, Text, StyleSheet, ScrollView} from 'react-native';

const data = [
  {
    id: 1,
    img: require('../../assets/images/image10.png'),
    text: 'Tom Holland',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 2,
    img: require('../../assets/images/image11.png'),
    text: 'Zendaya',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 3,
    img: require('../../assets/images/image12.png'),
    text: 'Benedict Cumberbatch',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 4,
    img: require('../../assets/images/image13.png'),
    text: 'Jacon Batalon',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
  {
    id: 5,
    img: require('../../assets/images/image10.png'),
    text: 'Tom Holland',
    description:
      'stylistic categories where a particular movie can be placed based on the setting, characters, plot, mood, tone, and theme. A film"s main genre category will be based on where the majority of the content lands. A sub-genre is a smaller category that fits inside a particula',
  },
];
const FlatlistActor = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.flat}>
      {data.map(function (item) {
        return (
          <View style={styles.container} key={item.id}>
            <View style={styles.Flat}>
              <Image source={item.img} style={styles.img} />
              <Text style={styles.txt}>{item.text}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
export default FlatlistActor;

const styles = StyleSheet.create({
  flat: {
    alignSelf: 'center',
    width: '90%',
  },
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 35,
  },
  img: {
    width: 72,
    height: 72,
    borderRadius: 7,
  },
  txt: {
    fontSize: 12,
    marginVertical: 7,
    fontWeight: '700',
  },
  Flat: {
    width: 75,
    height: 75,
  },
});
