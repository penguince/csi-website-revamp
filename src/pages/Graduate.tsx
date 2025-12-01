const Graduate = () => {
  /* 
		TO DO AMS: 
		1. identify sections of the page -- look at prev pages, current dpt website, and understand the typical sections
		2. What data is needed?
		3. Components needed? -- keep everything in here (as per others), 
		---
		4. sketch page layout in nb
		---
		5. build the skeleton 
		6. add real data n content
		7. styling
		8. cleanup and final check
	*/
  return (
    <div className="w-full">
      <div className="bg-csi-gray border-b border-gray-300 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center bg-white py-4 px-6 rounded shadow-sm">
            Graduate Programs
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700">
          Graduate program information coming soon...
        </p>
      </div>
    </div>
  );
};

export default Graduate;
