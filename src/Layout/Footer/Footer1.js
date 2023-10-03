import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Footer1() {
    const [Visible, setVisible] = useState(false)
    const [loader, setLoader] = useState(true);
    const handleScroll = () => {
        var scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (loader === true) {
            setTimeout(() => setLoader(false), 2000);
        }
    }, [loader]);
    const gototop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 col-xl-4 me-auto mb-5 mb-lg-0">
                            <Link
                                className="footer-logo h2 text-primary mb-0 font-w-7"
                                to="/"
                            >
                                W<span className="text-dark font-w-4">inck.</span>
                            </Link>
                            <p className="my-3">
                                geniusrise.health - Bootstrap 5 Multipurpose Landing Page Is fully
                                responsible, Build whatever you like with the geniusrise.health.
                            </p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="/"
                                    ><i className="la la-facebook"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="/"
                                    ><i className="la la-dribbble"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="/"
                                    ><i className="la la-instagram"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="/"
                                    ><i className="la la-twitter"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="/"
                                    ><i className="la la-linkedin"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="row">
                                <div className="col-12 col-sm-4 navbar-light">
                                    <h5 className="mb-4">Pages</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="/about-us"
                                            >About</Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="/product-grid"
                                            >Shop</Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="/faq">Faq</Link>
                                        </li>
                                        <li>
                                            <Link className="list-group-item-action" to="/contact1"
                                            >Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-light">
                                    <h5 className="mb-4">Service</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="/"
                                            >Content Writing</Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="/"
                                            >Documentation</Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="/sign_in"
                                            >Account</Link>
                                        </li>
                                        <li>
                                            <Link className="list-group-item-action" to="/career"
                                            >Careers</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-light">
                                    <h5 className="mb-4">Our Address</h5>
                                    <div className="mb-3">
                                        <p className="mb-0 text-muted">
                                            423B, Road Wordwide Country, USA
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <Link className="btn-link" to="mailto:skytouchinfotech.com">
                                            skytouchinfotech.com</Link>
                                    </div>
                                    <div>
                                        <Link className="btn-link" to="tel:+912345678900"
                                        >+91-234-567-8900</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <hr className="m-0" />
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            Copyright ©2020 All rights reserved | geniusrise.health is made by
                            <i className="lar la-heart text-primary heartBeat2"></i>
                            <u><Link className="text-primary" to="/">  Skytouch Infotech</Link></u>
                        </div>
                        <div className="col-md-6 text-md-end mt-3 mt-md-0">
                            <ul className="list-inline mb-0">
                                <li className="me-3 list-inline-item">
                                    <Link className="list-group-item-action" to="/">
                                        Term Of Service
                                    </Link>
                                </li>
                                <li className="me-3 list-inline-item">
                                    <Link className="list-group-item-action" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="list-group-item-action" to="/"> Support </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={`${Visible ? 'scroll-top' : ''}`} >
                <div class="smoothscroll" onClick={gototop}>Scroll Top</div>
            </div>
        </>
    )
}

export default Footer1
