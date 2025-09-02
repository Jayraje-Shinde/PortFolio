import { Projects } from './Projects.jsx'
import { Contactme } from './Contact.jsx'
import { Aboutme } from './Aboutme.jsx'
import { Routes, Route } from 'react-router-dom'
export function Maincontent() {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h2 className="text-2xl text-browntext font-bold mb-4">Main Content</h2>
					<p>This is the main content area.</p>
				</>
			} />
			<Route path="/Projects" element={<Projects />} />
			<Route path="/Contact" element={<Contactme />} />
			<Route path="/About" element={<Aboutme />} />
		</Routes>
	)
}
