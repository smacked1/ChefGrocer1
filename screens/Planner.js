import Layout from '../components/Layout';
import { Text } from 'react-native';
import { fonts } from '../theme/fonts';

export default function Planner() {
  return (
    <Layout>
      <Text style={fonts.title}>Meal Planner</Text>
      {/* Add planner logic here */}
    </Layout>
  );
}
