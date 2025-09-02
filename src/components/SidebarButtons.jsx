import { Link } from "react-router-dom"
export function SidebarItemsWithStyles() {
	return (
		<div className="my-4 h-full flex flex-col text-creamewhite items-center py-6 ">
			<Link to="/"><div className="my-3 p-4 hover:bg-teracottabg-2  rounded-2xl">Home</div></Link>
			<Link to="/About"><div className="my-3 p-4 hover:bg-teracottabg-2 rounded-2xl">About</div></Link>
			<Link to="/Projects"><div className="my-3 p-4 hover:bg-teracottabg-2 rounded-2xl">Projects</div></Link>
			<Link to="/Contact"><div className="my-3 p-4 hover:bg-teracottabg-2 rounded-2xl">Contact</div></Link>
		</div >
	)
} 