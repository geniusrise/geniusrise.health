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

function ProductList() {
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
    const [selectedProduct1, setSelectedProduct1] = useState(null);




    return (
        <div className="page-wrapper">
            <HerosectionHeader name={"Product List"} folder1={"Shop"} />
            <div className="page-content">
                <section>
                    <Container>
                        <Row>
                            <Col lg={9} md={12} className="order-lg-1">
                                <Row className="mb-4 align-items-center">
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
                                {productsToShow.map((product, index) => (
                                    <div className="card product-card product-list mb-5 mt-5">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-md-5">
                                                <img
                                                    className="img-fluid"
                                                    src={require(`../../assets/images/${product.pictures[0]}`)}
                                                    alt=""
                                                />

                                            </div>
                                            <div className="col-lg-8 col-md-7">
                                                <div className="card-body">
                                                    <Link
                                                        to="/product-single"
                                                        onClick={() => {
                                                            dispatch(setSelectedProduct(product.id));
                                                        }}
                                                        className="product-title text-black"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                    <div className="product-price"><del className='text-black text-muted'>${product.price}</del>{" "}${product.salePrice}
                                                    </div>
                                                    <p className="mt-2 mb-0">Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, facilisis nec laoreet consequat, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
                                                    <div className="product-link d-flex align-items-center mt-4">
                                                        <button className="btn-compare" type="button" onClick={() => {
                                                            setIsOpen(true);
                                                            setSelectedProduct1(product);
                                                        }}><i className="las la-random"></i>
                                                        </button>
                                                        <button className="btn-cart mx-3" type="button" onClick={() => {
                                                            handleAddToCart(product);
                                                        }}><i className="las la-shopping-cart me-1" ></i>
                                                        </button>
                                                        <button className="btn-wishlist" type="button" onClick={() => {
                                                            handleAddToWishList(product);
                                                        }}><i className="lar la-heart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Row className='my-5'>
                                    <ProductPagination
                                        activePage={activePage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </Row>
                            </Col>
                            <div className="col-lg-3 col-md-12 sidebar mt-8 mt-lg-0">
                                <SideBar />
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
            {
                selectedProduct1 && (
                    <Lightbox
                        mainSrc={require(`../../assets/images/${selectedProduct1.pictures[photoIndex]}`)}
                        nextSrc={require(`../../assets/images/${selectedProduct1.pictures[(photoIndex + 1) % selectedProduct1.pictures.length]
                            }`)}
                        prevSrc={require(`../../assets/images/${selectedProduct1.pictures[
                            (photoIndex + selectedProduct1.pictures.length - 1) % selectedProduct1.pictures.length
                        ]
                            }`)}
                        onCloseRequest={() => setSelectedProduct1(null)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + selectedProduct1.pictures.length - 1) % selectedProduct1.pictures.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % selectedProduct1.pictures.length)}
                        enableZoom={false}
                    />
                )
            }


        </div >
    );
}

export default ProductList;
