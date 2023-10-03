import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Col,
    Container,
    Input,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Table
} from "reactstrap";
import HerosectionHeader from "../../Componet/Herosection/HerosectionHeader";
import { addToCart, addToWishList } from "../../store/reducer/productReducer";
import RatingList from "./RatingList";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function ProductSingle() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.allProducts);

    const id = useSelector((state) => state.products.selectedProduct);
    const filteredProducts = useSelector(
        (state) => state.products.filteredProducts
    );
    let product = filteredProducts.find((p) => p.id === Number(id));
    useEffect(() => {

    }, [product])
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSetlectedColor] = useState("");
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };
    const handleColorClick = (color) => {
        setSetlectedColor(color);
    };
    const handleAddToCart = (product) => {
        const size = selectedSize || product.size[0];
        const color = selectedColor || product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity,
        };

        dispatch(addToCart(productToAdd));
    };
    const handleAddToWishList = (product) => {
        const size = selectedSize || product.size[0];
        const color = selectedColor || product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity,
        };

        dispatch(addToWishList(productToAdd));
    };

    const imageGalleryView = [];
    if (product === undefined) {
        allProducts[0].pictures.map((image, index) => {
            return imageGalleryView.push({
                original: require(`../../assets/images/` + image),
                thumbnail: require(`../../assets/images/` + image),
            })
        });
    } else {
        product.pictures.map((image, index) => {
           return imageGalleryView.push({
                original: require(`../../assets/images/` + image),
                thumbnail: require(`../../assets/images/` + image),
            })
        });
    }

    if (product === undefined ? (product = allProducts[0]) : product)
        return (
            <div className="page-wrapper">
                <HerosectionHeader name={"Product Single"} folder1={"Shop"} />

                <div className="page-content">
                    <div>
                        <section>
                            <Container className="container">
                                <Row className="align-items-center">
                                    <Col lg={5} md={6}>
                                        <img
                                            className="img-fluid"
                                            src={require(`../../assets/images/${product.pictures[0]}`)}
                                            alt=""
                                        />
                                    </Col>
                                    <Col lg={7} md={6} className="mt-5 mt-lg-0">
                                        <div className="product-details">
                                            <h4>
                                                {product.name}
                                            </h4>

                                            <div className="product-price my-4">
                                                <span class="d-block"> ${product.salePrice} <del>${product.price} </del></span>
                                                <span className="text-primary">
                                                    {Array.from({ length: product.rating }).map((_, index) => (
                                                        <i key={index} className="las la-star"></i>
                                                    ))}
                                                </span>
                                            </div>

                                            <ul className="list-unstyled mb-4">
                                                <li className="mb-2 text-black">
                                                    Availibility: <span className="text-muted">{product.stock}</span>
                                                </li>
                                                <li className="text-black">
                                                    Categories: <span className="text-muted">{product.category}</span>
                                                </li>
                                            </ul>
                                            <p className="mb-4">{product.description}</p>

                                            <div className="row my-4">
                                                <Col lg={5} sm={6} >
                                                    <h6 className="mb-2 text-black">Size</h6>
                                                    <Input
                                                        type="select"
                                                        className="form-select"
                                                        name="size"
                                                        id="size"
                                                        placeholder="Size"
                                                        onChange={handleSizeChange}
                                                    >
                                                        <option disabled selected hidden>
                                                            Size
                                                        </option>
                                                        {product.size.map((size) => (
                                                            <option key={size} value={size}>
                                                                {size}
                                                            </option>
                                                        ))}
                                                    </Input></Col>
                                                <Col lg={7} sm={6} className="mt-3 mt-sm-0">
                                                    <div class="widget-color">
                                                        <h6 className="mb-2 text-black">Color</h6>
                                                        <div className="d-flex">
                                                            {product.colors.map((col, index) => (
                                                                <div className="form-check ps-0 me-3 list-inline" key={index}>
                                                                    <input
                                                                        type="radio"
                                                                        className="form-check-input"
                                                                        id={col}
                                                                        name="Radios"
                                                                        onChange={() => handleColorClick(col)}
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor={col}
                                                                        data-bg-color={col}
                                                                        style={{ backgroundColor: col }}
                                                                    ></label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <h6 className="mb-0 me-3">Quantity:</h6>
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        className="btn-product btn-product-up"
                                                        onClick={() => {
                                                            if (quantity > 1) setQuantity(quantity - 1);
                                                        }}
                                                    >
                                                        <i className="las la-minus"></i>
                                                    </button>
                                                    <input
                                                        className="form-product"
                                                        type="number"
                                                        name="form-product"
                                                        value={quantity}
                                                        onChange={(e) => {
                                                            const newQuantity = parseInt(e.target.value);
                                                            if (
                                                                newQuantity >= 1 &&
                                                                newQuantity <= product.stock
                                                            ) {
                                                                setQuantity(newQuantity);
                                                            }
                                                        }}
                                                        max={product.stock}
                                                    />
                                                    <button
                                                        className="btn-product btn-product-down"
                                                        onClick={() => {
                                                            if (quantity < product.stock)
                                                                setQuantity(quantity + 1);
                                                        }}
                                                    >
                                                        <i className="las la-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-link d-flex align-items-center mt-4">
                                                <button
                                                    className=" btn-cart me-3"
                                                    type="button"
                                                    onClick={() => handleAddToCart(product)}
                                                >
                                                    <i className="las la-shopping-cart me-2"></i>Add To Cart
                                                </button>
                                                <button
                                                    className="btn-wishlist"
                                                    type="button"
                                                    onClick={() => {
                                                        handleAddToWishList(product);
                                                    }}
                                                >
                                                    <i className="lar la-heart me-2"></i>Add To Wishlist
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section className="bg-light">
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <Nav tabs className="nav nav-tabs" style={{ cursor: 'pointer', borderBottom: 'none' }}>
                                            <NavItem>
                                                <NavLink
                                                    className={
                                                        activeTab === "1"
                                                            ? " active ms-0 nav-item nav-link"
                                                            : " ms-0 nav-item nav-link"
                                                    }
                                                    onClick={() => {
                                                        toggle("1");
                                                    }}

                                                >
                                                    Description
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={
                                                        activeTab === "2" ? "active nav-item nav-link" : "nav-item nav-link"
                                                    }
                                                    onClick={() => {
                                                        toggle("2");
                                                    }}
                                                >
                                                    Additional Information
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={
                                                        activeTab === "3" ? "active  nav-item nav-link" : " nav-item nav-link"
                                                    }
                                                    onClick={() => {
                                                        toggle("3");
                                                    }}
                                                >
                                                    Reviews (3)
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={activeTab} className="pt-5">
                                            <TabPane tabId="1" className="tab-pane fade show">
                                                <h5 class="mb-3">Product Description</h5>
                                                <p className="lead mb-0">{product.description}</p>
                                            </TabPane>
                                            <TabPane tabId="2" className="tab-pane fade show">
                                                <h5 className="mb-3">Additional information</h5>
                                                <Table bordered className="mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>Size</td>
                                                            <td>{product.size.join(" ")}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Color</td>
                                                            <td>{product.colors.join(" ")}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chest</td>
                                                            <td>38 inches</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Waist</td>
                                                            <td>20 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Length</td>
                                                            <td>35 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fabric</td>
                                                            <td>Cotton, Silk &amp; Synthetic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Warranty</td>
                                                            <td>6 Months</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                            <TabPane tabId="3" className="tab-pane fade show">
                                                <Row>
                                                    <Col md={7}>
                                                        <RatingList />
                                                        <ReviewList />
                                                    </Col>
                                                    <Col md={5}>
                                                        <ReviewForm />
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </div>
            </div>
        );
}

export default ProductSingle;
