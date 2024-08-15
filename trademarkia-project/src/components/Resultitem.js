import React from 'react';

const CustomBox = () => {
  return (
    <div className="relative w-[955.71px] h-[1466.5px] top-[275.5px] left-[50px] opacity-100 border border-black overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-black p-2 bg-gray-200">Mark</th>
            <th className="border border-black p-2 bg-gray-200">Details</th>
            <th className="border border-black p-2 bg-gray-200">Status</th>
            <th className="border border-black p-2 bg-gray-200">Class / Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your rows here */}
          <tr>
            <td className="border border-black p-2">Example Mark</td>
            <td className="border border-black p-2">Example Details</td>
            <td className="border border-black p-2">Example Status</td>
            <td className="border border-black p-2">Example Description</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomBox;
