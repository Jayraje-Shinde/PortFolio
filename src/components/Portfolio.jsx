import './Portfolio.css'
import { Maincontent } from './Maincontent.jsx'
import { SidebarItemsWithStyles } from './SidebarButtons'

export default function Portfolio() {
	return (
		<>
			<div className="overflow-hidden bg-mutedteal p-4 h-screen">
				{/* navbar */}
				<div className="bg-teracottabg-1 text-center mx-4 rounded-full text-[24px]  text-eggshellwhite font-bold p-2">
					Portfolio
				</div>

				<div className="flex">
					<aside className="m-4 bg-teracottabg-1 rounded-2xl h-[28rem] sticky w-28 ">
						<SidebarItemsWithStyles />
					</aside>

					<main className="m-4 scroll-auto overflow-y-auto bg-lightbg rounded-2xl h-[28rem] p-4 flex-1 custom-scrollbar">
						<Maincontent />
					</main>
				</div>
			</div>
		</>
	)
}