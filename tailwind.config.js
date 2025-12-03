/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"csi-blue": "#1268D2",
				"csi-dark": "#444E5A",
				"csi-light": "#EBF2FC",
				"csi-gray": "#f1f1f1",
			},
		},
	},
	plugins: [],
};
