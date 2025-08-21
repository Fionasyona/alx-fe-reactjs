import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import PostsComponent from './component/PostsComponent.jsx';  // Adjust the import path as necessary
import './index.css';  // Ensure you have your styles imported  
import ReactDOM from 'react-dom/client';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
