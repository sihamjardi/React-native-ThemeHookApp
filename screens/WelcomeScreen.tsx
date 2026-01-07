import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const logo = require('@/assets/images/icon.png');

const WelcomeScreen: React.FC = () => {
  const colorScheme = useColorScheme(); 

  const effectiveIsLight = colorScheme === 'light';

  const palette = effectiveIsLight
    ? { background: '#EDEFEE', text: '#333333', accent: '#EE9972' }
    : { background: '#333333', text: '#EDEFEE', accent: '#EE9972' };

  return (
    <ScrollView style={[styles.container, { backgroundColor: palette.background }]}>
      <View style={styles.headerWrapper}>
        <Image source={logo} style={styles.image} />
        <Text style={[styles.headerText, { color: palette.text }]}>
          My Website
        </Text>
      </View>

      <Text style={[styles.regularText, { color: palette.text }]}>
        My Website est une application de démonstration permettant d’explorer
        l’adaptation automatique du thème clair/sombre dans React Native.
      </Text>

      <View style={[styles.accentBar, { backgroundColor: palette.accent }]} />

      <Text style={[styles.debugText, { color: palette.text }]}>
        colorScheme détecté : {String(colorScheme)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    paddingLeft: 15,
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  accentBar: {
    height: 8,
    marginHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
  debugText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.7,
  },
});

export default WelcomeScreen;
