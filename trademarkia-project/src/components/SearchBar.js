import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Helper from '../utils/Helper';// Import Helper from the correct path

function SearchBar({ onSearch }) 
{
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);

    // Define the data you want to send in the POST request
    const data = {
      "input_query": query,
      "input_query_type":"",
      "sort_by": "default",
      "status": [],
      "exact_match": false,
      "date_query": false,
      "owners": [],
      "attorneys": [],
      "law_firms": [],
      "mark_description_description": [],
      "classes": [],
      "page": 1,
      "rows": 10,
      "sort_order": "desc",
      "states":[],
      "counties":[]
    };

    // Make the POST request
    axios.post(Helper.getUserAPI(), data, {
      headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        'origin': 'http://localhost:3001',
        'priority': 'u=1, i',
        'referer': 'http://localhost:3001/',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
      }
    })
    .then(response => {
      var resdata=response.data;
      console.log('Search Response:', resdata);
      // Handle the response data
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error
    });
  };

  return (
    <div className="mt-8 ml-10">
      <div className="flex items-center space-x-6">
        <img src="/trade.png" alt="Logo" className="w-15 h-15" />
        <input
          type="text"
          className="flex flex-[4] border-[0.5px] bg-white p-2 pr-3 rounded-[14px] items-center justify-between gap-x-2 max-h-[56px] border-gray-300 w-[80%] max-w-[2000px]"
          placeholder="Search Trademark here eg. Mickey Mouse"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <hr className="mt-4 border-gray-300" />
      <div className="w-full max-w-[1400px]"></div>
    </div>
  );
}

export default SearchBar;
