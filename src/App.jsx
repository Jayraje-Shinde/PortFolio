import Portfolio from './components/Portfolio.jsx'
import { Router, BrowserRouter } from 'react-router-dom'
function App() {

	return (
		<>
			<BrowserRouter>
				<Portfolio />
			</BrowserRouter>
		</>
	)
}

export default App
