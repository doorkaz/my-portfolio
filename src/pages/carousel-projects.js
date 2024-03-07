import Carousel from 'react-bootstrap/Carousel';

function CarouselProjects() {
  return (
	<div className='d-flex flex-column align-items-center justify-content-center mx-5'>
		<Carousel fade indicators={false} className='carousel-responsive'>
			<Carousel.Item interval={3000} className='carousel-item-responsive'>
				<img className='carousel-img' src={process.env.PUBLIC_URL +'/assets/carousel/datafy/canva-1.png'} alt='First slide'/>
			</Carousel.Item>
			<Carousel.Item interval={3000} className='carousel-item-responsive'>
				<img className='carousel-img' src={process.env.PUBLIC_URL +'/assets/carousel/prestigetravels.png'} alt='Third slide'/>
			</Carousel.Item>
			<Carousel.Item interval={3000} className='carousel-item-responsive'>
				<img className='carousel-img' src={process.env.PUBLIC_URL +'/assets/carousel/claps.png'} alt='First slide'/>
			</Carousel.Item>
			<Carousel.Item interval={3000} className='carousel-item-responsive'>
				<img className='carousel-img' src={process.env.PUBLIC_URL +'/assets/carousel/easytake.png'} alt='Second slide'/>
			</Carousel.Item>
		</Carousel>
	</div>
  );
}

export default CarouselProjects;