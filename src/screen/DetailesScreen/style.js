import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 280,
  },
  modal: {
    borderTopLeftRadius: 20,
    backgroundColor: '#fffefc',
    flex: 1,
    zIndex: 10,
    bottom: 15,
    borderTopRightRadius: 20,
  },
  BottomSheet: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    fontFamily: 'Mulish-SemiBold',
  },
  header: {
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
    alignSelf: 'center',
  },
  icon: {
    marginTop: 10,
    fontSize: 25,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '50%',
    paddingHorizontal: 18,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginHorizontal: 22,
    alignSelf: 'flex-start',
  },
  column: {
    flexDirection: 'column',
  },
  description: {
    width: '89%',
    alignSelf: 'center',
    marginBottom: 7,
    marginVertical: 20,
  },
  des: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 8,
    color: '#110E47',
    fontFamily: 'Merriweather-Bold',
  },
  paragrah: {
    lineHeight: 22,
    color: '#9C9C9C',
    fontFamily: 'Mulish-Bold',
    fontSize: 13,
    fontWeight: '400',
  },
  name: {
    fontSize: 12,
    fontFamily: 'Mulish-SemiBold',
    fontWeight: '400',
    color: '#9C9C9C',
    marginBottom: 4,
  },
  proparety: {
    color: '#000',
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'Mulish-SemiBold',
  },
  Focuseicon: {
    color: 'red',
  },
  nonFocuse:{
    color:'gray'
  }
});

export default styles;
