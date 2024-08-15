// src/components/Sidebar.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios

import { fetchSearchResults } from './apiService';

const Sidebar = (onSearch) => {
  const [query] = useState('');
  const sidesearchall = () => {
    onSearch(query);
    fetchSearchResults(query);
  };
  const sidesearchreg = () => {
    onSearch(query);
    fetchSearchResults(query);
  };
  const sidesearchpen = () => {
    onSearch(query);
    fetchSearchResults(query);
  };
  const sidesearchaba = () => {
    onSearch(query);
    fetchSearchResults(query);
  };
  const sidesearchoth = () => {
    onSearch(query);
    fetchSearchResults(query);
  };
  return (
    <aside class="absolute right-0 top-1/2 transform -translate-y-1/2 w-[296px] bg-transparent rounded-xl shadow-md p-5">

      {/* Status Section */}
      <div class="rounded-xl mt-3 border bg-white p-4 flex flex-col max-h-[300px] overflow-y-auto">
        <p className="font-semibold w-[100px] mb-2">Status</p>
        <div className="flex flex-row flex-wrap gap-3">
          <a className="block w-fit" href="/search/trademarks?q=nike&amp;country=us&amp;status=all">
            <div>
              <div className="px-3 py-2 flex flex-row items-center border rounded-xl text-tm-blue border-tm-blue bg-[#EEF4FF]">
                <button className="text-sm cursor-pointer" onClick={sidesearchall}>All</button>
              </div>
            </div>
          </a>
          <a className="block w-fit" href="/search/trademarks?q=nike&amp;country=us&amp;status=registered">
            <div>
              <div className="px-3 py-2 flex flex-row items-center border rounded-xl">
                <div className="w-[10px] h-[10px] mr-1 rounded-full" style={{ background: 'rgb(18, 136, 7)' }}></div>
                <button className="text-sm cursor-pointer" onClick={sidesearchreg}>Registered</button>
              </div>
            </div>
          </a>
          <a className="block w-fit" href="/search/trademarks?q=nike&amp;country=us&amp;status=pending">
            <div>
              <div className="px-3 py-2 flex flex-row items-center border rounded-xl">
                <div className="w-[10px] h-[10px] mr-1 rounded-full" style={{ background: 'rgb(237, 171, 44)' }}></div>
                <button className="text-sm cursor-pointer" onClick={sidesearchpen}>Pending</button>
              </div>
            </div>
          </a>
          <a className="block w-fit" href="/search/trademarks?q=nike&amp;country=us&amp;status=abandoned">
            <div>
              <div className="px-3 py-2 flex flex-row items-center border rounded-xl">
                <div className="w-[10px] h-[10px] mr-1 rounded-full" style={{ background: 'rgb(232, 82, 82)' }}></div>
                <button className="text-sm cursor-pointer" onClick={sidesearchaba}>Abandoned</button>
              </div>
            </div>
          </a>
          <a className="block w-fit" href="/search/trademarks?q=nike&amp;country=us&amp;status=other">
            <div>
              <div className="px-3 py-2 flex flex-row items-center border rounded-xl">
                <div className="w-[10px] h-[10px] mr-1 rounded-full" style={{ background: 'rgb(52, 152, 219)' }}></div>
                <button className="text-sm cursor-pointer" onClick={sidesearchoth}>Other</button>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="flex flex-col p-5 mt-2 text-sm font-medium bg-white rounded-xl shadow-md min-h-[265px]">
        <div className="flex flex-col w-64 max-w-full">
          <div className="flex flex-col">
            <div className="flex flex-col w-full max-w-[256px]">
              <div className="flex flex-col justify-center max-w-full text-neutral-700 w-[206px]">
                <div className="flex gap-3 items-start w-full">
                  <button className="font-bold text-black">Owners</button>
                  <button>Law Firms</button>
                  <button>Attorneys</button>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/857eb230ca2ec310e792aa6c788334b773133239a5b1531c85feb79af907a481?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
                  className="object-contain mt-1.5 rounded-xl aspect-[24.39] w-[49px]"
                  alt="Status Indicator"
                />
              </div>
              <div className="flex gap-7 items-center py-3 pr-3.5 pl-3.5 mt-3 w-full bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-[40px] text-zinc-800">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0acf4206a078e03a07bb5be3e6193df599cfc1a3f18ce228a87093b2fdfcf7?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[17px]"
                    alt="Search Icon"
                  />
                  <input
                    type="text"
                    placeholder="Search Owners"
                    className="self-stretch my-auto w-full bg-transparent border-none focus:outline-none"
                    aria-label="Search Owners"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-between items-start mt-4 w-full max-w-[256px] text-zinc-800">
          <div className="flex items-start">
            <div className="flex shrink-0 w-1 bg-white h-[42px]" />
            <div className="flex flex-col w-[164px]">
              <div className="flex flex-col items-start">
                <div className="flex gap-3 items-center font-semibold text-blue-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0eb32b0ff4a40850dfe6afb30c1eee82daba64349059aae9a78852a0abaa1e1?placeholderIfAbsent=true&apiKey=23c7e84d89bb4e968d029935439c6cfc"
                    className="object-contain shrink-0 self-stretch my-auto w-6 rounded-none aspect-square"
                    alt="Tesla Logo"
                  />
                  <div className="self-stretch my-auto">Tesla, Inc.</div>
                </div>
                <div className="flex gap-3 items-center self-stretch mt-3">
                  <input
                    type="checkbox"
                    className="flex shrink-0 self-stretch my-auto w-6 h-6 rounded-md border border-solid border-neutral-700"
                  />
                  <label className="self-stretch my-auto">LEGALFORCE RAPC.</label>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <input
                    type="checkbox"
                    className="flex shrink-0 self-stretch my-auto w-6 h-6 rounded-md border border-solid border-neutral-700"
                  />
                  <label className="self-stretch my-auto">SpaceX Inc.</label>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <input
                    type="checkbox"
                    className="flex shrink-0 self-stretch my-auto w-6 h-6 rounded-md border border-solid border-neutral-700"
                  />
                  <label className="self-stretch my-auto">SpaceX Inc.</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 w-2 rounded-xl bg-zinc-300 h-[47px]" />
        </div>
      </div>

      {/* Display Section */}
      <div className="flex flex-col px-5 py-5 mt-6 w-full font-bold text-black bg-white rounded-xl shadow-md min-h-[124px]">
        <h2 className="text-base">Display</h2>
        <div className="flex gap-3 justify-between items-center px-2 py-2 mt-3 w-full text-sm rounded-xl bg-zinc-100 max-w-[255px] min-h-[50px]">
          <button className="gap-2.5 self-stretch py-2.5 pr-7 pl-8 my-auto bg-white rounded-lg shadow-md w-[125px] max-md:px-5">
            Grid View
          </button>
          <button className="self-stretch my-auto text-center w-[102px]">
            List View
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
