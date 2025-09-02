import { Link } from "react-router-dom"
export function Home() {
	return (
		<div className="flex h-full space-y-6 justify-around">
			<div className="w-[50%] flex flex-col items-center">
				<div className="text-[41.6px] font-bold mb-4 mt-10 text-center">
					<p>
						<span className="text-[#CD0101]">HELLO</span>,<br />
						This is <span className="text-[#9027F1]">JAYRAJE</span>,<br />
						<span className="text-pink-600">I'm a PROGRAMMER.</span>
					</p>
				</div>
				<div className="flex gap-4">
					<Link to="/About">
						<Button>
							About Me
						</Button>
					</Link>
					<Button disabled={true}>Resume<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
					</svg>

					</Button>
				</div>
			</div>
			<div className="bg-gray-700 h-[310px] text-gray-200 p-6 rounded-xl shadow-lg font-mono text-sm w-[50%] overflow-hidden">
				<pre>
					<code>
						<span className="text-pink-400">const</span>{" "}
						<span className="text-blue-400">coder</span> = {"{"}{"\n"}
						{"  "}name: <span className="text-green-400">'Jayraje Shinde'</span>,
						{"\n"}
						{"  "}skills: [
						<span className="text-green-400">'React'</span>,{" "}
						<span className="text-green-400">'Node.js'</span>,{" "}
						<span className="text-green-400">'PostgresSQL'</span>,{" "}
						<span className="text-green-400">'Prisma'</span>,{"\n"}
						<span className="text-green-400">'Devops'</span>,{" "}
						<span className="text-green-400">'Git'</span>,{" "}
						<span className="text-green-400">'PHP'</span>,{" "}
						<span className="text-green-400">'Linux'</span>,{" "}
						<span className="text-green-400">'MongoDB'</span>,{" "}
						<span className="text-green-400">'TypeScripts'</span>],{"\n"}
						{"  "}hardWorker: <span className="text-yellow-400">true</span>,
						{"\n"}
						{"  "}quickLearner: <span className="text-yellow-400">true</span>,
						{"\n"}
						{"  "}problemSolver: <span className="text-yellow-400">true</span>,
						{"\n"}
						{"  "}hireable: <span className="text-pink-400">function</span>() {"{"}
						{"\n"}
						{"    "}<span className="text-pink-400">return</span> ({"\n"}
						{"      "}this.hardWorker &&{"\n"}
						{"      "}this.problemSolver &&{"\n"}
						{"      "}this.skills.length &gt;= 5{"\n"}
						{"    "});{"\n"}
						{"};"}
					</code>
				</pre>
			</div>
		</div>
	)
}

function Button({
	children,
	disabled = false
}) {
	return (
		<span className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-3xl flex gap-2 items-center p-4 m-2 bg-[#C7CBC6] text-[#002B5D] w-[150px] justify-center`}>
			{children}
		</span>
	)
}