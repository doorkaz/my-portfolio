import './App.css';
// Rutas
import CustomNavbar from './components/navbar.js';
import CarouselProjects from './screens/carousel-projects.js';
import About from './screens/about.js';
import Projects from './screens/projects.js';
import Contact from './screens/contact.js';
// React-Bootstrap
import Container from 'react-bootstrap/Container';

function App() {
  	return (
		<div className="App">
			<div className="custom-div">
				<CustomNavbar/>
				<Container>
					<CarouselProjects/>
					<About/>
					<Projects/>
				</Container>
			</div>
			<Contact/>
		</div>
	);
}

export default App;
