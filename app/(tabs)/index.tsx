import { View, Text, Button, StyleSheet } from 'react-native';
import Layout from '../../components/Layout';
import { colors } from '../../theme/colors';

export default function HomeScreen() {
  return (
    <Layout>
      <Text style={styles.title}>ChefGrocer</Text>
      <Text style={styles.subtitle}>Your kitchen command center</Text>

      <View style={styles.section}>
        <Button
          title="Speak"
          color={colors.accentPurple}
          onPress={() => console.log('Voice triggered')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.budget}>Budget: $120 | Spent: $85</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
    color: colors.textDark
  },
  section: {
    marginTop: 20
  },
  budget: {
    color: colors.accentGreen,
    fontSize: 16
  }
});
