import { Container, Col, Card, Row, Carousel } from "react-bootstrap";

export default function Gallery() {
	return (
		<Container>
			<div class="jumbotron">
				<h1 class="display-4">Gallery</h1>
			</div>

			<Row xs="1" md="2" className="g-4">

				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Post Card campaign to celebrate "Azadi ka Amrit Mahotsav"</Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}postcard1.jpeg`} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}postcard4.jpeg`} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}postcard2.jpeg`}  alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}postcard3.jpeg`}  alt="Second slide"/> </Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Header as="h5" className="myBackgroud1">Diwali Celebration </Card.Header>
						<Card.Body>
							<Carousel>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}diwali1.jpeg`} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}diwali2.jpeg`} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}diwali3.jpeg`} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}diwali4.jpeg`} alt="Second slide"/> </Carousel.Item>
								<Carousel.Item>	<img className="d-block w-100" src={`${process.env.REACT_APP_S3_IMG_URL}diwali5.jpeg`} alt="Second slide"/> </Carousel.Item>
								
							</Carousel>
						</Card.Body>
					</Card>
				</Col>				
			</Row>
		</Container>
	);
}