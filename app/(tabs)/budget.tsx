import { View, Text, StyleSheet, ProgressBarAndroid, Button } from 'react-native';
import Layout from '../../components/Layout';
import { colors } from '../../theme/colors';

export default function BudgetScreen() {
  const budget = 120;
  const spent = 85;
  const percent = spent / budget;

  const alert = percent > 0.9;

  return (
    <Layout>
      <Text style={styles.title}>Budget Tracker</Text>
      <Text style={styles.subtitle}>Monitor your grocery spending</Text>

      <View style={styles.barContainer}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={percent}
          color={alert ? colors.alertRed : colors.accentGreen}
        />
        <Text style={styles.amount}>
          ${spent} spent of ${budget}
        </Text>
      </View>

      {alert && (
        <Text style={styles.alert}>
          ⚠️ You're close to your budget limit!
        </Text>
      )}

      <View style={styles.cta}>
        <Button
          title="View Spending Breakdown"
          color={colors.primary}
          onPress={() => console.log('Navigate to breakdown')}
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
    marginTop: 8,
    color: colors.textDark
  },
  barContainer: {
    marginTop: 20
  },
  amount: {
    marginTop: 8,
    fontSize: 16,
    color: colors.textDark
  },
  alert: {
    marginTop: 12,
    fontSize: 16,
    color: colors.alertRed
  },
  cta: {
    marginTop: 30
  }
});
