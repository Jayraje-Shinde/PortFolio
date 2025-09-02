import { Home } from './Home.jsx'
import { Projects } from './Projects.jsx'
import { Contactme } from './Contact.jsx'
import { Aboutme } from './Aboutme.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
export function Maincontent() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.4 }}
					>
						<Home />
					</motion.div>
				} />
				<Route path="/Projects" element={
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.4 }}
					>
						<Projects />
					</motion.div>
				} />
				<Route path="/Contact" element={
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.4 }}
					>
						<Contactme />
					</motion.div>
				} />
				<Route path="/About" element={
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.4 }}
					>
						<Aboutme />
					</motion.div>
				} />
			</Routes>
		</AnimatePresence >
	)
}
