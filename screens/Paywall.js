import Layout from '../components/Layout';
import { Text } from 'react-native';
import { fonts } from '../theme/fonts';
import { colors } from '../theme/colors';

export default function Paywall() {
  return (
    <Layout>
      <Text style={[fonts.title, { color: colors.primary }]}>Upgrade to Pro</Text>
      {/* Add paywall logic here */}
    </Layout>
  );
}
