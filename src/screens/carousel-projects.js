import Carousel from 'react-bootstrap/Carousel';
import styles from '../components/styles.module.css';
function CarouselProjects() {
  return (
	<div className="d-flex flex-column align-items-center justify-content-center">
		<Carousel fade style={{height: '400px', width: '800px'}} >
			<Carousel.Item interval={2000} style={{width: '800px'}}>
				<img src={process.env.PUBLIC_URL +"/images/carousel/claps.png"} height='400' alt="First slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3>Claps App</h3>	
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000} style={{width: '800px'}}>
				<img src={process.env.PUBLIC_URL +"/images/carousel/easytake.png"} height='400' alt="Second slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3>EasyTake</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000} style={{width: '800px'}}>
				<img src={process.env.PUBLIC_URL +"/images/carousel/prestigetravels.png"} height='400' alt="Third slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3>PrestigeTravels</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
  );
}

export default CarouselProjects;