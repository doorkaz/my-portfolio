import Carousel from 'react-bootstrap/Carousel';
import styles from '../components/styles.module.css';
function CarouselProjects() {
  return (
	<div className="d-flex flex-column align-items-center justify-content-center mx-5">
		<Carousel fade className={styles["carousel-responsive"]}>
			<Carousel.Item interval={2000} className={`${styles["carousel-item-responsive"]}`}>
				<img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/claps.png"} alt="First slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3 className={styles["carousel-caption-text"]}>Claps App</h3>	
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000} className={`${styles["carousel-item-responsive"]}`}>
				<img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/easytake.png"} alt="Second slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3 className={styles["carousel-caption-text"]}>EasyTake</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2000} className={`${styles["carousel-item-responsive"]}`}>
				<img className={styles["carousel-img"]} src={process.env.PUBLIC_URL +"/images/carousel/prestigetravels.png"} alt="Third slide"/>
				<Carousel.Caption className={styles["glass-efect"]}>
					<h3 className={styles["carousel-caption-text"]}>PrestigeTravels</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
  );
}

export default CarouselProjects;