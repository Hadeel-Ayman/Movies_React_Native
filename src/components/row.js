import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RowLine = ({text}) => {
  return (
    <View style={styles.header2}>
      <Text style={styles.show}>{text}</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtBtn}>See More</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 13,
    paddingHorizontal: 3,
  },
  show: {
    fontFamily: 'Merriweather-Bold',
    fontWeight: '900',
    fontSize: 16,
    color: '#110E47',
  },
  btn: {
    width: 81,
    height: 28,
    borderColor: '#AAA9B1',
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    color: '#AAA9B1',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Mulish-Bold',
  },
});
export default RowLine;
