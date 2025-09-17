import { View, Text, StyleSheet, Switch } from 'react-native';
import Layout from '../../components/Layout';
import { colors } from '../../theme/colors';
import { useState } from 'react';

export default function SettingsScreen() {
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const toggleVoice = () => setVoiceEnabled(!voiceEnabled);

  return (
    <Layout>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Voice Commands</Text>
        <Switch
          value={voiceEnabled}
          onValueChange={toggleVoice}
          trackColor={{ false: colors.divider, true: colors.accentPurple }}
          thumbColor={voiceEnabled ? colors.primary : colors.textLight}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode (coming soon)</Text>
        <Switch disabled />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: colors.textDark
  }
});
