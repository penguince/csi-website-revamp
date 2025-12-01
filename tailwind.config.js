/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"csi-blue": "#2d88de",
				"csi-dark": "#53626e",
				"csi-gray": "#f1f1f1",
			},
		},
	},
	plugins: [],
};
