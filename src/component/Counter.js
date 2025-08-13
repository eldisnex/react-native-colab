import { useState } from 'react';
import { View, Button } from 'react-native';

export default function Counter() {
   const [count, setCount] = useState(0);
   return (
      <View>
         <Button onPress={() => setCount(count + 1)} title='Add' />
      </View>
   );
}
