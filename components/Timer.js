import { useState, useEffect } from 'react';
import { Text } from 'react-native';

export default function Timer({ duration }) {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return <Text>{`Time left: ${seconds}s`}</Text>;
}
