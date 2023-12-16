import Carousel from 'react-bootstrap/Carousel';
import styles from '../components/styles.module.css';
function CarouselProjects() {
  return (
	<div className="d-flex align-items-center justify-content-center rounded">
		<Carousel fade style={{width: '800px'}} >
			<Carousel.Item interval={2000}>
				<img src="/images/carousel/claps.png" width='800' alt="First slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3>Claps App</h3>	
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img src="/images/carousel/easytake.png" width='800' alt="Second slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3>EasyTake</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<img src="/images/carousel/claps.png" width='800' alt="Third slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3>PrestigeTravels</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
  );
}

export default CarouselProjects;