import Carousel from 'react-bootstrap/Carousel';
import styles from '../components/styles.module.css';
function CarouselProjects() {
  return (
	<div className="d-flex align-items-center justify-content-center rounded">
		<Carousel fade style={{width: '400px'}}>
			<Carousel.Item interval={2000}>
				<img src="/images/carousel/claps.png" width='400' alt="First slide" />
				<Carousel.Caption className={`${styles["glass-efect"]}`}>
					<h3>Claps App</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img src="/images/carousel/easytake.png" width='400' alt="Second slide" />
				<Carousel.Caption className={`${styles["glass-efect"]}`}>
					<h3>EasyTake</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img src="/images/carousel/claps.png" width='400' alt="Third slide" />
				<Carousel.Caption className={`${styles["glass-efect"]}`}>
				<h3>PrestigeTravels</h3>
				<p>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur.
				</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
  );
}

export default CarouselProjects;