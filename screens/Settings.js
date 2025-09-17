import Layout from '../components/Layout';
import { Text } from 'react-native';
import { fonts } from '../theme/fonts';

export default function Settings() {
  return (
    <Layout>
      <Text style={fonts.title}>Settings</Text>
      {/* Add settings logic here */}
    </Layout>
  );
}
