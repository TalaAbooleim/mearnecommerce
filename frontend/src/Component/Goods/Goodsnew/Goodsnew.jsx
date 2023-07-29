import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './img1.webp';
import img2 from './img2.jpg';
import img3 from './img3.webp';
import img4 from './img4.webp';
import './Goodsnew.css'

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Goodsnew = () => {
  return (
    <div className="container my-5 py-5">
    <div className="row">
      <div className="col-12  mb-5 ">
        <p className="title  display-6 fw-bolder text-left">New Good</p>
        
        <div className="title_Products_line mt-3 mb-3"></div>
        
        <div className="d-flex flex-wrap justify-content-around">
        <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={img1} alt="Product Image" style={{ width: '100%', height: '200px' }}  />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Product description goes here.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">$19.99</Card.Subtitle>
          <Button variant="warning">Buy Now</Button>
          
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={img2} alt="Product Image" style={{ width: '100%', height: '200px' }} />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Product description goes here.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">$19.99</Card.Subtitle>
          <Button variant="warning">Buy Now</Button>
          
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={img3} alt="Product Image" style={{ width: '100%', height: '200px' }} />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Product description goes here.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">$19.99</Card.Subtitle>
          <Button variant="warning">Buy Now</Button>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={img4} alt="Product Image" style={{ width: '100%', height: '200px' }}  />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Product description goes here.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">$19.99</Card.Subtitle>
          <Button variant="warning">Buy Now</Button>
          
        </Card.Body>
      </Card>
    </div>
      </div>
    </div>
    <div className="text-center mt-3">
              <Button variant="warning" >Show More</Button>
            </div>
    </div>
  )
}

export default Goodsnew