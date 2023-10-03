import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Container,
    Input,
    Row,
    Table
} from "reactstrap";
import HerosectionHeader from "../../Componet/Herosection/HerosectionHeader";
import { removeCartItem, updateCartItemQuantity } from "../../store/reducer/productReducer";

function ProductCart() {
    const cartItems = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();


    const [quantities, setQuantities] = useState(
        cartItems.map((item) => item.quantity)
    );
    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= cartItems[index].stock) {
            const updatedQuantities = [...quantities];
            updatedQuantities[index] = newQuantity;
            setQuantities(updatedQuantities);
            dispatch(updateCartItemQuantity({ index, quantity: newQuantity }));
        }
    };
    const handleDeleteItem = (index) => {
        // Dispatch the action to remove the cart item from the reducer
        dispatch(removeCartItem(index));
    };
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemTotal = item.quantity * item.salePrice;
            return total + itemTotal;
        }, 0);
    };
    let Tax = 1.0;
    return (
        <div className="page-wrapper">
            <HerosectionHeader name={"Product Cart"} folder1={"Shop"} />
            <div className="page-content">
                <section>
                    <Container>
                        <Row>
                            <div className="col">
                                <div className="table-responsive table-bordered border-bottom-0">
                                    <Table className="cart-table table text-center mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th scope="col">
                                                    Product
                                                </th>
                                                <th scope="col">
                                                    Price
                                                </th>
                                                <th scope="col">
                                                    Quantity
                                                </th>
                                                <th scope="col">
                                                    Total
                                                </th>
                                                <th scope="col">
                                                    Remove
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody >
                                            {cartItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-lg-flex align-items-center">
                                                            <img
                                                                className="img-fluid me-lg-2 mb-2 mb-lg-0"
                                                                style={{ height: "100px", width: "100px" }}
                                                                src={require(`../../assets/images/${item.pictures[0]}`)}
                                                                alt={item.name}
                                                            />
                                                            <div className="ms-lg-3 mt-3 mt-lg-0">
                                                                <div
                                                                    // onClick={() =>
                                                                    //     navigate(`/product-single/${item.id}`)
                                                                    // }
                                                                    className="product-name"
                                                                >
                                                                    {item.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">${item.salePrice}</h6>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <button
                                                                className="btn-product btn-product-up"
                                                                onClick={() => {
                                                                    if (quantities[index] > 1) {
                                                                        handleQuantityChange(
                                                                            index,
                                                                            quantities[index] - 1
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <i className="las la-minus"></i>
                                                            </button>
                                                            <Input
                                                                className="form-product"
                                                                type="number"
                                                                name="form-product"
                                                                value={quantities[index]}
                                                                onChange={(e) => {
                                                                    const newQuantity = parseInt(e.target.value);
                                                                    handleQuantityChange(index, newQuantity);
                                                                }}
                                                                max={item.stock}
                                                            />
                                                            <button
                                                                className="btn-product btn-product-down"
                                                                onClick={() => {
                                                                    if (quantities[index] < item.stock) {
                                                                        handleQuantityChange(
                                                                            index,
                                                                            quantities[index] + 1
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <i className="las la-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            {item.quantity * item.salePrice}
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <button
                                                            type="submit"
                                                            onClick={() => {

                                                                handleDeleteItem(item.id);
                                                            }}
                                                            className="btn btn-primary btn-sm"
                                                        >
                                                            <i className="las la-times"></i>
                                                        </button>
                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                        </Row>


                        <Row className="mt-8">
                            <div className="col-lg-7">
                                <div>
                                    <label className="text-dark h4">Coupon</label>
                                    <p>Enter your coupon code if you have one.</p>
                                    <div className="input-group">
                                        <input className="form-control" id="c-code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" type="text" />
                                        <button className="btn btn-primary btn-sm" type="button" id="button-addon2">Apply Coupon</button>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button className="btn btn-primary me-1">Update Cart</button>
                                    <button className="btn btn-dark">Cancel</button>
                                </div>
                            </div>
                            <div className="col-lg-5 mt-5 mt-lg-0">
                                <div className="rounded p-5" style={{ backgroundColor: '#d0faec' }}>
                                    <h4 className="text-dark text-center mb-2">Cart Totals</h4>
                                    <div className="d-flex justify-content-between align-items-center border-bottom py-3"> <span className="text-muted">Subtotal</span>  <span className="text-dark">${calculateTotal()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center border-bottom py-3"> <span className="text-muted">Tax</span>  <span className="text-dark">${Tax}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pt-3 mb-5"> <span className="text-dark h5">Total</span>  <span className="text-dark font-weight-bold h5">${calculateTotal() + (calculateTotal() * Tax) / 100}</span>
                                    </div>
                                    <div>
                                        <Link
                                            className="btn btn-primary me-1"
                                            to="/product-grid"
                                        >
                                            Continue Shopping
                                        </Link>
                                        <Link
                                            className="btn btn-dark"
                                            to="/checkout"
                                        >
                                            Proceed to checkout       </Link>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                {/* <Contact /> */}
            </div>
        </div>
    );
}

export default ProductCart;

