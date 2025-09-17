
import * as Speech from 'expo-speech';
import { colors } from '../theme/colors';

export const speak = (text) => {
  Speech.speak(text, { rate: 1.0, pitch: 1.0 });
};

// Example VoiceButton component (can be improved for UI)
import { Button } from 'react-native';
export default function VoiceButton({ text }) {
  return <Button title="Speak" color={colors.accentPurple} onPress={() => speak(text)} />;
}
