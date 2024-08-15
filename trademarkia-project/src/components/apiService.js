import axios from 'axios';
import Helper from '../utils/Helper'; // Adjust the path as needed

// Define the function for making the API request
export const fetchSearchResults = async (query) => {
  const data = {
    "input_query": query,
    "input_query_type": "",
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
    "states": [],
    "counties": []
  };

  try {
    const response = await axios.post(Helper.getUserAPI(), data, {
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
    });

    console.log('Search Response:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
