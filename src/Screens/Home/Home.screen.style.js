import {StyleSheet} from 'react-native';
import {rh, rw, rbr, rf} from '../../Utils/Layout.util';
import {COLORS} from '../../Themes';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: rh(200),
    width: '100%',
  },
  banner: {
    height: rh(200),
    width: '100%',
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
    paddingVertical: rh(30),
  },
  products: {
    height: rh(300),
  },
  card: {
    height: rh(150),
    width: rw(170),
    backgroundColor: 'white',
    borderRadius: rbr(6),
    elevation: 5,
    alignItems: 'center',
    marginHorizontal: rw(10),
    overflow: 'hidden',
  },
  imageCard: {
    height: rh(80),
    width: '100%',
    resizeMode: 'stretch',
  },
  textCard: {
    flex: 1,
    marginVertical: rh(20),
  },
  textSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: rf(20),
  },
});

export {Styles};