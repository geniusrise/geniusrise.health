import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Card,
    CardText,
    Col,
    Container,
    Row
} from 'reactstrap';
import HerosectionHeader from '../../Componet/Herosection/HerosectionHeader';
import ProductPagination from '../../Componet/ProductPagination';
import SideBar from '../../Componet/Sidebar/Sidebar';
import {
    addToCart,
    addToWishList,
    setSelectedProduct,
} from '../../store/reducer/productReducer';

function ProductGrid() {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('1');
    // eslint-disable-next-line no-unused-vars
    const [minValue, setMinValue] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [maxValue, setMaxValue] = useState(6);
    // eslint-disable-next-line no-unused-vars
    const [ProductParPage, setProductPerPage] = useState(6);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setActivePage(1);
    };
    const filteredProducts = useSelector((state) => {
        const option = parseInt(selectedOption);
        switch (option) {
            case 1: // Newest Item
                return state.products.filteredProducts;
            case 2: // High To Low
                return state.products.filteredProducts
                    .slice()
                    .sort((a, b) => b.price - a.price);
            case 3: // Low To High
                return state.products.filteredProducts
                    .slice()
                    .sort((a, b) => a.price - b.price);
            default:
                return state.products.filteredProducts;
        }
    });


    const [activePage, setActivePage] = useState(1);
    const pageSize = 6;

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const totalPages = Math.ceil(filteredProducts.length / pageSize);

    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    const handleAddToCart = (product) => {
        const size = product.size[0];
        const color = product.colors[0];
        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity: 1,
        };
        dispatch(addToCart(productToAdd));
    };
    const handleAddToWishList = (product) => {
        const size = product.size[0];
        const color = product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity: 1,
        };

        dispatch(addToWishList(productToAdd));
    };

    const [activeFilter, setActiveFilter] = useState('grid');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // eslint-disable-next-line no-unused-vars
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [selectedProduct, setSelectedProduct1] = useState(null);


    console.log(productsToShow);

    return (
        <div className="page-wrapper">
            <HerosectionHeader name={"Product Grid"} folder1={"Shop"} />
            <div className="page-content">
                <section>
                    <Container>
                        <Row>
                            <Col lg={9} md={12} className="order-lg-1">
                                <Row className="">
                                    <Card className="border-0 p-2">
                                        <Row className="align-items-center">
                                            <Col md="5" className="mb-3 mb-md-0">
                                                <CardText tag="span" className="text-muted">
                                                    Showing 1 to {productsToShow.length} of{' '}
                                                    {filteredProducts.length} total
                                                </CardText>
                                            </Col>
                                            <Col
                                                md="7"
                                                className="d-flex align-items-center justify-content-md-end"
                                            >
                                                <div className="view-filter">
                                                    <Link
                                                        to="/product-grid"
                                                        className={`me-2 ${activeFilter === 'grid' ? 'active text-primary' : ''
                                                            }`}
                                                        onClick={() => handleFilterClick('grid')}
                                                    >
                                                        <i className="lab la-buromobelexperte"></i>
                                                    </Link>
                                                    <Link
                                                        to="/product-list"
                                                        className={`text-dark ${activeFilter === 'list' ? 'active text-primary' : ''
                                                            }`}
                                                        onClick={() => handleFilterClick('list')}
                                                    >
                                                        <i className="las la-list"></i>
                                                    </Link>
                                                </div>
                                                <div className="sort-filter ms-2 d-flex align-items-center">
                                                    <select
                                                        className="form-select"
                                                        id="inputGroupSelect02"
                                                        onChange={handleOptionChange}
                                                        value={selectedOption}
                                                    >
                                                        <option selected>Sort By</option>
                                                        <option value="1">Newest Item</option>
                                                        <option value="2">High To Low</option>
                                                        <option value="3">Low To High</option>
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                                <Row className="text-center">
                                    {productsToShow.map((product, index) => (
                                        <Col lg="4" md="6" className="mt-5">
                                            <div className="card product-card">
                                                <img
                                                    className="img-fluid"
                                                    src={require(`../../assets/images/${product.pictures[0]}`)}
                                                    alt=""
                                                />
                                                <div className="card-body">
                                                    <div className="product-title"><Link
                                                        onClick={() => {
                                                            dispatch(setSelectedProduct(product.id));
                                                        }}
                                                        to="/product-single"
                                                        className="product-title text-black"
                                                    >
                                                        {product.name}
                                                    </Link></div>
                                                    <div className="mt-1"> <span className="product-price"><del className="text-muted">${product.price}</del> ${product.salePrice}</span>
                                                    </div>
                                                </div>
                                                <div className="product-link d-flex align-items-center justify-content-center mt-4">
                                                    <button className="btn-compare" type="button" onClick={() => {
                                                        setIsOpen(true);
                                                        setSelectedProduct(product);
                                                    }}><i className="las la-random"></i>
                                                    </button>
                                                    <button className="btn-cart mx-3" type="button"><i className="las la-shopping-cart me-1" onClick={() => {
                                                        handleAddToCart(product);
                                                    }}></i>
                                                    </button>
                                                    <button className="btn-wishlist" type="button" onClick={() => {
                                                        handleAddToWishList(product);
                                                    }}><i className="lar la-heart"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <Row className='my-5'>
                                    <ProductPagination
                                        activePage={activePage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </Row>
                            </Col>
                            <div className="col-lg-3 col-md-12 sidebar mt-6 mt-lg-0">
                                <SideBar />
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
            {selectedProduct && (
                <Lightbox
                    mainSrc={require(`../../assets/images/${selectedProduct.pictures[photoIndex]}`)}
                    nextSrc={require(`../../assets/images/${selectedProduct.pictures[(photoIndex + 1) % selectedProduct.pictures.length]
                        }`)}
                    prevSrc={require(`../../assets/images/${selectedProduct.pictures[
                        (photoIndex + selectedProduct.pictures.length - 1) % selectedProduct.pictures.length
                    ]
                        }`)}
                    onCloseRequest={() => setSelectedProduct1(null)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + selectedProduct.pictures.length - 1) % selectedProduct.pictures.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % selectedProduct.pictures.length)}
                    enableZoom={false}
                />
            )}


        </div>
    );
}

export default ProductGrid;
