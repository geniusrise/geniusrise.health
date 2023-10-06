import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    UncontrolledDropdown,
} from 'reactstrap';
import navLinks from '../../api/NavLinks';
const Header1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [loader, setLoader] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [isCartview, setIsCartview] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const [openMenus, setOpenMenus] = useState([]);

    const toggleMenu = (index) => {
        if (openMenus.includes(index)) {
            setOpenMenus(openMenus.filter((item) => item !== index));
        } else {
            setOpenMenus([...openMenus, index]);
        }
    };
    const closeAllMenus = () => {
        setOpenMenus([]);
    };
    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsCartview(false);
        }
    };
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
        if (loader) {
            const timeout = setTimeout(() => {
                setLoader(false);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [loader]);


    return (
        <header id="site-header" className="header">
            <div id="header-wrap" className={`${visible ? 'fixed-header ' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Navbar */}
                            <Navbar className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand logo text-primary mb-0 font-w-7o" to="/">
                                    Geniusrise<span class="text-light font-w-4"> Health</span>
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={toggle}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header1;
