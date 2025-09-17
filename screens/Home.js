import React from 'react';
import { Text, Button, View } from 'react-native';
import Layout from '../components/Layout';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

export default function Home() {
  return (
    <Layout>
      <Text style={fonts.title}>ChefGrocer</Text>
      <Text style={fonts.subtitle}>Your kitchen command center</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Speak"
          color={colors.accentPurple}
          onPress={() => console.log('Voice triggered')}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ color: colors.accentGreen }}>
          Budget: $120 | Spent: $85
        </Text>
      </View>
    </Layout>
  );
}
