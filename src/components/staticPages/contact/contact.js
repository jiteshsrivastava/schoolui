import { Container } from "react-bootstrap";

const ContactPage = () => {
	return (
		<Container>
			 <div class="jumbotron">
       			<h1 class="display-4">Contact Us</h1>
      		</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card">						
						<div className="card-body">
							<h5 className="card-title">Address</h5>
							<p className="card-text">Dehwa Mohanlalganj, Lucknow Uttar Pradesh 226301</p>
						
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">						
						<div className="card-body">
							<h5 className="card-title">Email</h5>
							<p className="card-text">gurukulacademylucknow@yahoo.com</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card">						
						<div className="card-body">
							<h5 className="card-title">Phone</h5>						
							<p className="card-text">(+91) 7880990888, 9026279797</p>
						</div>
					</div>
				</div>
				
			</div>

			<div>
            <iframe 
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.2587971657813!2d80.96029857556036!3d26.67220437038481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf1e3b8ded527%3A0x963d8dcf8687b86b!2sGurukul%20Academy!5e0!3m2!1sen!2sin!4v1735904628812!5m2!1sen!2sin" 
			width="600" 
			height="450" 
			style={{border:0}}
			allowfullscreen="" 
			loading="lazy" 
			referrerpolicy="no-referrer-when-downgrade">				
			</iframe>
        </div>
		</Container>
	);
}

export default ContactPage;
