import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';
import bg from  '../../../assets/bg.png'
import QZone from '../QZone/QZone';
const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className="mb-2" variant='outline-primary'><FaGoogle /> Login with Google</Button>
            <Button variant='outline-secondary'><FaGithub /> Login with Github</Button>
            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        <FaFacebook /> facebook
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><FaTwitter/> twitter </ListGroup.Item>
                    <ListGroup.Item as="li" >
                        <FaInstagram /> instagram
                    </ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className=' overflow-hidden'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;