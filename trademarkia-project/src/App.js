import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import StatusIndicator from './components/StatusIndicator';
import Sidebar from './components/SideBar'; 
import Filtershare from './components/Filtershare';


function App() {
  const [status, setStatus] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setStatus('Searching...');
    // Simulate API call
    setTimeout(() => {
      if (query.toLowerCase() === 'nike') {
        setResults([
          { mark: 'Nike Logo', details: 'Nike, Inc.', status: 'Active', classDesc: 'Sportswear' },
          { mark: 'Puma Logo', details: 'Puma, Inc.', status: 'Active', classDesc: 'Sportswear' }
          // Add more results as needed
        ]);
        setStatus('');
      } else {
        setStatus('No Results Found');
      }
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow p-8">
        <div className="flex items-center space-x-4 mb-4">
          <SearchBar onSearch={handleSearch} />
          <Filtershare />
        </div>
        <StatusIndicator status={status} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default App;


