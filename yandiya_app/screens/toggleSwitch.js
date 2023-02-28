import React from 'react';
import { StyleSheet, Switch, View, Text} from 'react-native';

function ToggleSwitch({ isDarkMode, onToggle }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      marginRight: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Switch value={isDarkMode} onValueChange={onToggle} />
      <Text style={styles.label}>Dark Mode</Text>
    </View>
  );
}

export default ToggleSwitch;
