import { View, Text, Button, StyleSheet } from 'react-native';
import Layout from '../../components/Layout';
import { colors } from '../../theme/colors';


const stylesHome = StyleSheet.create({
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
export default function HomeScreen() {
  return (
    <Layout>
      <Text style={stylesHome.title}>ChefGrocer</Text>
      <Text style={stylesHome.subtitle}>Your kitchen command center</Text>

      <View style={stylesHome.section}>
        <Button
          title="Speak"
          color={colors.accentPurple}
          onPress={() => console.log('Voice triggered')}
        />
      </View>

      <View style={stylesHome.section}>
        <Text style={stylesHome.budget}>Budget: $120 | Spent: $85</Text>
      </View>
    </Layout>
  );
}
