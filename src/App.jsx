import React from 'react';
import { productApi } from './API/api';

export default function App() {
  return (
    <div>
    
      <pre>
        {JSON.stringify(productApi, null, 2)}
      </pre>
    </div>
  );
}
