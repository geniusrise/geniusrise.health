import React, { useState, useEffect, useRef } from 'react';
import navLinks from '../../api/NavLinks';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
const Header2 = () => {
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

    const handleClick = () => {
        var elems = document.querySelectorAll('.childsubmenu');
        [].forEach.call(elems, function (el) {
            el.classList.remove('show');
        });
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
            {!loader ? (
                <div id="header-wrap" className={`${visible ? 'fixed-header ' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/* Navbar */}
                                <Navbar className="navbar navbar-expand-lg navbar-light justify-content-start">
                                    <Link className="navbar-brand logo text-primary mb-0 font-w-7o me-6" to="/">
                                        G<span class="text-dark font-w-4">eniusrise Healthcare.</span>
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
                                    <Collapse
                                        isOpen={isOpen}
                                        className="collapse navbar-collapse"
                                        navbar
                                    >
                                        <Nav className="me-auto" navbar>
                                            {navLinks.map((navLink, index) =>
                                                navLink.type && navLink.type === 'subMenu' ? (
                                                    <UncontrolledDropdown nav inNavbar key={index}>
                                                        <DropdownToggle nav caret>
                                                            {navLink.menu_title}
                                                        </DropdownToggle>
                                                        <DropdownMenu id={`submenu_${index}`} className='dropdown-menu'>
                                                            {navLink.child_routes &&
                                                                navLink.child_routes.map((subNavLink, keys) =>
                                                                    subNavLink.type &&
                                                                        subNavLink.type === 'childsubMenu' ? (
                                                                        <UncontrolledDropdown
                                                                            inNavbar
                                                                            className="dropdown-submenu"
                                                                            key={keys}
                                                                        >
                                                                            <DropdownToggle tag="a" caret className='dropdown-item dropdown-toggle'>
                                                                                {subNavLink.menu_title}
                                                                            </DropdownToggle>
                                                                            <DropdownMenu id={`childsubmenu_${keys}`} className='dropdown-menu'>
                                                                                {subNavLink.child_routes &&
                                                                                    subNavLink.child_routes.map(
                                                                                        (ChildsubNavLink, i) => (
                                                                                            <DropdownItem
                                                                                                key={i}
                                                                                                tag={Link}
                                                                                                to={ChildsubNavLink.path}
                                                                                                onClick={handleClick}
                                                                                            >
                                                                                                {ChildsubNavLink.menu_title}
                                                                                            </DropdownItem>
                                                                                        )
                                                                                    )}
                                                                            </DropdownMenu>
                                                                        </UncontrolledDropdown>
                                                                    ) : (
                                                                        <ul className="list-unstyled" key={keys}>
                                                                            <li>
                                                                                <DropdownItem
                                                                                    tag={Link}
                                                                                    to={subNavLink.path}
                                                                                >
                                                                                    {subNavLink.menu_title}
                                                                                </DropdownItem>
                                                                            </li>
                                                                        </ul>
                                                                    )
                                                                )}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                ) : (
                                                    <NavItem key={index}>
                                                        <NavLink href={navLink.path}>
                                                            {navLink.menu_title}
                                                        </NavLink>
                                                    </NavItem>
                                                )
                                            )}
                                        </Nav>
                                    </Collapse>
                                    <div className="d-sm-flex align-items-center justify-content-end">
                                        <Link className="btn-link" to="login">Login</Link>
                                        <Link className="btn btn-primary btn-sm ms-3 d-sm-inline-block d-none" to="signup">Sign Up</Link>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="ht-preloader">
                    <div className="loader clear-loader"> <span>W</span>
                        <span>i</span>
                        <span>n</span>
                        <span>c</span>
                        <span>k</span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header2;
