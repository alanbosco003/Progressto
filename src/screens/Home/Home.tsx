import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { ApplicationScreenProps } from '@/types/navigation';
function Home({ navigation }: ApplicationScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Home Screen</Text>
      <TouchableOpacity
        style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}
        onPress={() => navigation.navigate('Example')} // Navigate to Example screen
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Go to Example Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;