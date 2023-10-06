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
                                Geniusrise<span className="text-dark font-w-4"> Health.</span>
                            </Link>
                            <p className="my-3">
                                geniusrise.health - clinical AI assistants for hospitals, clinics and healthcare practices.
                            </p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="https://github.com/geniusrise"
                                    ><i className="la la-github"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="https://twitter.com/genius_rise"
                                    ><i className="la la-twitter"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="https://www.linkedin.com/company/geniusrise/"
                                    ><i className="la la-linkedin"></i></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="border rounded px-2 py-1 text-dark" to="https://huggingface.co/geniusrise"
                                    ><i className="la la-facebook"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="row">
                                <div className="col-12 col-sm-4 navbar-light">
                                    <h5 className="mb-4">Pages</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="https://geniusrise.ai"
                                            >Geniusrise</Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link className="list-group-item-action" to="https://github.com/geniusrise"
                                            >Github</Link>
                                        </li>
                                        <li>
                                            <Link className="list-group-item-action" to="https://huggingface.co/geniusrise"
                                            >Huggingface</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-light">
                                    <h5 className="mb-4">Our Address</h5>
                                    <div className="mb-3">
                                        <p className="mb-0 text-dark">
                                            Cinnabar Hills, Embassy Golf Links Business Park
                                            Challaghatta, Bengaluru, Karnataka 560071, India
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <Link className="btn-link text-dark" to="mailto:hello@geniusrise.ai">
                                            hello@geniusrise.ai</Link>
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
