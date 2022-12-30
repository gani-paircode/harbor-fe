import React, { Component } from 'react';
import './App.css';
import TestNets from './pages/testnets';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// Create a client
const queryClient = new QueryClient()

class App extends Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <TestNets />
      </QueryClientProvider>
    );
  }
}

export default App;
