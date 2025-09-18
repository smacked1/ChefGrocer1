import { View, Text, StyleSheet, Button } from 'react-native';
import Layout from '../../components/Layout';
import { colors } from '../../theme/colors';

export default function ExploreScreen() {
  return (
    <Layout>
      <Text style={stylesExplore.title}>Explore Features</Text>
      <Text style={stylesExplore.subtitle}>What ChefGrocer can do for you:</Text>

      <View style={stylesExplore.feature}>
        <Text style={stylesExplore.featureText}>🗣 Voice-powered grocery planning</Text>
        <Text style={stylesExplore.featureText}>📊 Budget tracking with smart alerts</Text>
        <Text style={stylesExplore.featureText}>📅 Calendar-based meal planning</Text>
        <Text style={stylesExplore.featureText}>🔒 Pro access for premium tools</Text>
      </View>

      <View style={stylesExplore.cta}>
        <Button
          title="Upgrade to Pro"
          color={colors.accentPurple}
          onPress={() => console.log('Navigate to Paywall')}
        />
      </View>
    </Layout>
  );
}

const stylesExplore = StyleSheet.create({
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
  feature: {
    marginTop: 20
  },
  featureText: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.textDark
  },
  cta: {
    marginTop: 30
  }
});
