import { View, Text, StyleSheet, Button } from 'react-native';
import Layout from '../../components/Layout';
import { colors } from '../../theme/colors';

export default function PaywallScreen() {
  return (
    <Layout>
      <Text style={styles.title}>ChefGrocer Pro</Text>
      <Text style={styles.subtitle}>Unlock premium features:</Text>

      <View style={styles.features}>
        <Text style={styles.feature}>✅ Voice-powered grocery planning</Text>
        <Text style={styles.feature}>✅ Budget alerts + breakdowns</Text>
        <Text style={styles.feature}>✅ Calendar-based meal planning</Text>
        <Text style={styles.feature}>✅ Pro-only recipes and tips</Text>
      </View>

      <View style={styles.cta}>
        <Button
          title="Subscribe for $4.99/month"
          color={colors.accentPurple}
          onPress={() => console.log('Trigger RevenueCat')}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: colors.textDark
  },
  features: {
    marginTop: 20
  },
  feature: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.textDark
  },
  cta: {
    marginTop: 30
  }
});
