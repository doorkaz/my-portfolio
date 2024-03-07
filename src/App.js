// Routes
import Navbar from './components/navbar.js';
import CarouselProjects from './pages/carousel-projects.js';
import About from './pages/about.js';
import Education from './pages/education.js';
import Skills from './pages/skills.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';

// React-Bootstrap
import Container from 'react-bootstrap/Container';

function App() {
  	return (
		<div className='App'>
			<div className='custom-div'>
				<Navbar/>
				<Container fluid='md' className='all'>
					<CarouselProjects/>
					<About/>
					<Skills/>
					<Projects/>
					<Education/>
				</Container>
			</div>
			<Contact/>
		</div>
	);
}

export default App;
