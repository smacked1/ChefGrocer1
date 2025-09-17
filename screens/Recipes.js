import Layout from '../components/Layout';
import { Text } from 'react-native';
import { fonts } from '../theme/fonts';

export default function Recipes() {
  return (
    <Layout>
      <Text style={fonts.title}>Recipes</Text>
      {/* Add recipes logic here */}
    </Layout>
  );
}
