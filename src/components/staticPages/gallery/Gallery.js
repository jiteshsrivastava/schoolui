import { Container, Col, Card, Row, Carousel } from "react-bootstrap";
import { FacebookEmbed } from 'react-social-media-embed';

export default function Gallery() {
	return (
		<Container>
			<div class="jumbotron">
				<h3 class="display-4">Gallery</h3>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div id="fb-root"></div>
				<FacebookEmbed width={0} />
				<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0" nonce="ooveFoif"></script>

				<Row xs="1" md="2" className="g-4">
					<Col><div class="fb-video" data-href="https://www.facebook.com/100093913191887/videos/293346816977812/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/100093913191887/videos/293346816977812/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/100093913191887/videos/293346816977812/"></a><p>DUSSEHRA (RAVAAN DAHAAN) PROGRAM ON 21/10/2023</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on Saturday, 21 October 2023</blockquote></div></Col>
<Col>
<div class="fb-video" data-href="https://www.facebook.com/100093913191887/videos/1477401589721277/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/100093913191887/videos/1477401589721277/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/100093913191887/videos/1477401589721277/"></a><p>DUSSEHRA DANCE PROGRAM 21/10/2023</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on Saturday, 21 October 2023</blockquote></div>
</Col>
<Col>
<div class="fb-post" data-href="https://www.facebook.com/photo/?fbid=192038343936604&amp;set=pcb.192039447269827" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/permalink.php?story_fbid=192039447269827&amp;id=100093913191887" class="fb-xfbml-parse-ignore"><p>DUSSEHRA CELEBRATION ON 21/10/2023</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on&nbsp;<a href="https://www.facebook.com/permalink.php?story_fbid=192039447269827&amp;id=100093913191887">Saturday, 21 October 2023</a></blockquote></div>
</Col>



					<Col>
						<div class="fb-video" data-href="https://www.facebook.com/100093913191887/videos/361914996185953/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/100093913191887/videos/361914996185953/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/100093913191887/videos/361914996185953/"></a><p>DUSSEHRA DANCE PROMGRAM 2 ON 21/10/2023</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on Saturday, 21 October 2023</blockquote></div></Col>
					<Col>
						<div class="fb-post" data-href="https://www.facebook.com/permalink.php?story_fbid=152556934551412&amp;id=100093913191887&amp;ref=embed_post" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/permalink.php?story_fbid=152556934551412&amp;id=100093913191887" class="fb-xfbml-parse-ignore"><p>VEGETABLE DAY CELEBRATE ON 19/08/2023 (PRE. NUR TO KG)</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on&nbsp;<a href="https://www.facebook.com/permalink.php?story_fbid=152556934551412&amp;id=100093913191887">Saturday, 19 August 2023</a></blockquote></div>
					</Col>
					<Col>
						<div class="fb-video" data-href="https://www.facebook.com/100093913191887/videos/317184197436908/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/100093913191887/videos/317184197436908/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/100093913191887/videos/317184197436908/"></a><p>PROGRAM ON 15/08/2023</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on Tuesday, 15 August 2023</blockquote></div>
					</Col>
					<Col>
						<div class="fb-video" data-href="https://www.facebook.com/100093913191887/videos/746576240570702/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/100093913191887/videos/746576240570702/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/100093913191887/videos/746576240570702/"></a><p>15/AUG/2023 PROGRAM CELEBRATE</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on Tuesday, 15 August 2023</blockquote></div>
					</Col>
					<Col>
						<div class="fb-video" data-href="https://www.facebook.com/100093913191887/videos/1434039817389706/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/100093913191887/videos/1434039817389706/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/100093913191887/videos/1434039817389706/"></a><p>INDEPENDENCE CELEBRATE PROGRAM ON 15/08/2023</p>Posted by <a href="https://www.facebook.com/people/Gurukul-Academy/100093913191887/">Gurukul Academy</a> on Tuesday, 15 August 2023</blockquote></div>
					</Col>
				</Row>
			</div>
			{/*

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

	*/}

		</Container>
	);
}