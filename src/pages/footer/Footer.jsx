import React from 'react';
import './footer.css';
import FooterNavItem from '../../componentes/footerSlice/FooterNavItem';

function Footer() {

    const usefullLinks = [
        'Home',
        'Movies',
        'My List',
        'Danger',
        'End Game',
    ];
    const locations = [
        'Cairo',
        'Alex',
        'Giza',
        'All Egypt',
    ]

  return (
    <footer id="footer" className="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="footer-info col-lg-5 col-md-12">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>IN-JOY</span>
                        </a>
                        <p>
                            تم عمل موقع الافلام هذا و سيتم تحسينه كثيرا , اتمنى دعمكم , اعلم ان الكلام هذا غير مناسب لكنى اردت ان اترك كلمة تذكرنى بكل كود كتبته 
                        </p>
                        <ul className="social-links mt-3">
                            <li className="twitter">
                            <ion-icon name="logo-twitter"></ion-icon>
                            </li>
                            <li className="facebook">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </li>
                            <li className="instagram">
                            <ion-icon name="logo-instagram"></ion-icon>
                            </li>
                            <li className="youtube">
                            <ion-icon name="logo-youtube"></ion-icon>                            
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            {usefullLinks.map(link => (
                                <FooterNavItem key={link} name={link}/>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Cinemas</h4>
                        <ul>
                            {locations.map(link => (
                                <FooterNavItem key={link} name={link}/>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Street Name <br/>
                            City Name, State 000000
                            <br/>
                            EGYPT <br/>
                            <br/>
                            <strong>Phone:</strong> 111111111111111
                            <br/>
                            <strong>Email:</strong>fakeemail@gmail.com                      
                        </p>
                    </div>
                    <div className="copyright">
                        @ CopyRight all rights reserved 2024 {""}
                        <p className="credits">
                            Design By {""}
                            <span> {""} Mohamed-Abd-Elghany</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;