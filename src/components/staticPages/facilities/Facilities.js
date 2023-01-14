import { Container, Col, Card, Row, Carousel } from "react-bootstrap";
import computerImg1 from './computerImg1.jpg';
import computerImg2 from './computerImg2.jpg';
import computerImg3 from './computerImg3.jpg';

import scienceImg1 from './scienceImg1.jpg';
import scienceImg2 from './scienceImg2.jpg';
import scienceImg3 from './scienceImg3.jpg';

import libraryImg1 from './libraryImg1.jpg';
import libraryImg2 from './libraryImg2.jpg';
import libraryImg3 from './libraryImg3.jpg';

export default function Facilities() {
	return (
		<Container>
			<div class="jumbotron">
				<h1 class="display-4">Facilities</h1>
			</div>

			<Row xs="1" md="3" className="g-4">

				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Computer Lab</Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src={computerImg1} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={computerImg2}  alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={computerImg3}  alt="Second slide"/> </Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Science Lab</Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src={scienceImg1} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={scienceImg2} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={scienceImg3} alt="Second slide"/> </Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Library</Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src={libraryImg1} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={libraryImg2} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={libraryImg3} alt="Second slide"/> </Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}