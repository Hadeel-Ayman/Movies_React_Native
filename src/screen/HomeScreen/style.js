import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
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
    marginVertical: 16,
    paddingHorizontal: 3,
  },
  head: {
    fontFamily: 'Merriweather-Bold',
    fontWeight: '700',
    fontSize: 16,
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
    fontSize: 12,
  },
  header3: {},
});
export default styles;
