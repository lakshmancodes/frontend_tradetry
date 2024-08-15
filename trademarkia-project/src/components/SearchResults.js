function SearchResults({ results }) {
  return (
    <div className="mt-6">
      {results.length > 0 && (
        <div>
          <p className="text-gray-700">{results.length} trademarks found for your search query</p>
          <p className="text-gray-500">Also try searching for related words...</p>
        </div>
      )}
      <table className="table-auto w-3/4 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 w-1/4 text-left">Mark</th>
            <th className="px-4 py-2 text-left">Details</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Class/Description</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-2 w-1/4">{result.mark}</td>
              <td className="px-4 py-2">{result.details}</td>
              <td className="px-4 py-2">{result.status}</td>
              <td className="px-4 py-2">{result.classDesc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
