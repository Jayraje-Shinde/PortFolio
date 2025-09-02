import { div } from 'framer-motion/client'
import img from '../../public/Screenshot 2025-09-02 235125.png'
export function Projects() {
	return (
		<div className="">
			<ProjectComponent title="Portfolio" desc="Built a portfolio in React, gaining hands-on experience in component-based architecture, React Router, responsive design with Tailwind CSS, state and props management, and deployment workflows." githublink="https://github.com/Jayraje-Shinde/PortFolio/" livepreviewlink="https://jayraje-shinde.vercel.app/" />
			<ProjectComponent reverse={true} />
		</div>
	)
}

function ProjectComponent({ title, desc, reverse = false, githublink, livepreviewlink }) {
	return (
		<div className={`bg-[#FAF9F6] text-[#696969] hover:shadow-lg mx-2 mb-4 mt-2 p-4 rounded-2xl h-52 flex ${reverse ? "flex-row-reverse" : ""} justify-between`}>
			<div className={`flex-1 mx-2 mr-4 rounded-2xl `}>
				<div className='flex m-3 gap-2 flex-col'>
					<span className={`text-3xl font-bold ${reverse ? "float-right" : "float-left"} font-serif`}>{title}</span>
					<p className='font-serif'>{desc}</p>
					<div className='flex gap-4'>
						<Githubbutton Link={githublink} />
						<Livepreview Link={livepreviewlink} />
					</div>
				</div>
			</div>
			<div>
				<img className='h-full rounded-2xl' src={img} alt="img not found" />
			</div>
		</div >
	)
}

function Githubbutton({ Link }) {
	return (
		<a
			href={Link}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center px-5 py-2 mx-4 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
		>
			{/* GitHub Icon (optional) */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-5 h-5 mr-2"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.5 2 .5 2 .9.1 1.8-.4 2.2-.7.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 6.3 18 6.6 18 6.6c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.7.9.7 1.9v2.9c0 .3.2.7.8.6A11.6 11.6 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
			</svg>
			GitHub
		</a>

	)
}

function Livepreview({ Link }) {
	return (
		<a
			href={Link}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
		>
			{/* External Link Icon */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-5 h-5 mr-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M13 5h6m0 0v6m0-6L10 14m-4 5h12a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			Live Preview
		</a>

	)
}