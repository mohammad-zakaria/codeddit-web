import { faGooglePlusG, faInstagram,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Help Center" , link: "/help"},
        {name: "Support Inbox" , link: "/support"},
        {name: "Report a Problem" , link: "/report"}
    ]
    const ourAddress = [
        {name: "New York - 101010" , link: "//google.com/map"},
        {name: "Yards Abc" , link: "//google.com/map"},
       
    ]
    const helpAndSupport = [
        {name: "Help Center" , link: "/help"},
        {name: "Support Inbox" , link: "/support"},
        {name: "Report a Problem" , link: "/report"}
    ]
    const services = [
        {name: "Help Center" , link: "/help"},
        {name: "Support Inbox" , link: "/support"},
        {name: "Report a Problem" , link: "/report"},
        {name: "Help Center" , link: "/help"},
        {name: "Support Inbox" , link: "/support"},
        {name: "Report a Problem" , link: "/report"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Help and support" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Give Feedback" menuItems={helpAndSupport}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+220022002200</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;