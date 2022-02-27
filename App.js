import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {RestaurantsScreen} from './src/features/restaurants/screens/RestaurantsScreen';

export default function App() {
  return (
    <PaperProvider>
      <RestaurantsScreen />
    </PaperProvider>
  );
}
