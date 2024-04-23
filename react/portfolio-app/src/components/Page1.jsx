import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import Image1 from './src/.Image1.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Page1() {
    const imageUrl="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1189,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg";
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container className='row-g-12'>
        <Navbar.Brand className='col-6 fw-bold'  href="#home" style={{marginRight:'40px',fontSize:'40px'}}>WIX.</Navbar.Brand>
        <i></i>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <p style={{marginLeft:'-20px',marginTop:'15px'}}>Click edit and create your own amazing website</p>
            <Nav.Link href="#home" id="opt" style={{textDecoration:'underline', marginTop:'7px'}}>read me</Nav.Link>
            <Button variant="primary" style={{borderRadius:'30px',marginLeft:'16px'}}>Edit this site</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        
        
        
        
        {/* adding nav-bar */}
        <div className="nav-container d-flex mt-4" style={{ marginLeft:'40px' }}>
        <h2 style={{color:'grey', marginLeft:'90px'}}>J. ALISSA</h2>
        <div style={{marginLeftleft:'80px'}}>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
        <Nav.Link eventKey="link-1" style={{ color: 'black' ,marginLeft:'400px'}} >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: 'black' }}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" style={{ color: 'black' }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" style={{ color: 'black' }}>Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5" style={{ color: 'black' }}>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6" style={{ color: 'black' }}>ClientAlbum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-7" style={{ color: 'black' }}>Contact</Nav.Link>
        </Nav.Item>
        </Nav>
        </div>
      </div>

      <div className='Image' style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding:'50px',
        marginLeft:'10%',
        marginRight:'20%',
        width: '80%',
        height: '800px',
      }}>
        <p style={{ 
        position: 'absolute', 
        top: '30%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '80px',
        fontStyle: 'itallic',
        marginTop: '15px'
      }}>
        THE ART OF FOOD
      </p><br></br>
      <p style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '24px',
        fontStyle: 'times new roman' ,
        marginTop: '-40px'
      }}>
        P H O T O G R A P H Y
      </p>
      <button style={{ 
        position: 'absolute', 
        bottom: '260px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        padding: '10px 20px',
        backgroundColor: 'transparent', 
        border: 'outlined',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '-700px'

      }}>
       View More
      </button>
      </div>
      <div className='IconContainer' style={{marginLeft:'650px'}} >
      <FontAwesomeIcon icon={faPinterest} className='Icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faFacebook} className='Icon'style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} className='Icon' style={{ marginRight: '10px' }}/>
      <FontAwesomeIcon icon={faInstagram} className='Icon' />

    </div>
    <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    
    </>
  );
}

export default Page1;