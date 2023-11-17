import {Container, Row, Col} from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon4.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () =>{
    return (
        <footer className='footer'>
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src="" alt=''/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/sebastiangpg/'><img src={navIcon1} alt=''/></a>
                            <a href='https://github.com/sebastiangt06'><img src={navIcon2} alt=''/></a>
                            <a href='https://www.instagram.com/sebastiangt06/'><img src={navIcon3} alt=''/></a>
                        </div>
                        <p>Sebastian Gutierrez 2022. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}