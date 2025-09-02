// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'teracottabg':
				{
					"1": '#B85042',
					"2": "#9E3F34"
				},
				'lightbg': '#E7E8D1',
				'mutedteal': '#A7BEAE',
				'charcoalgrey': '#524D4D',
				'browntext': "#605150",
				'eggshellwhite': "#F1F0EA",
				'creamewhite': "#FFFFEE"
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar')
	],
};