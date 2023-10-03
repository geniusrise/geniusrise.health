import React from "react";
import { useSelector } from "react-redux";
import {
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
import HerosectionHeader from "../../Componet/Herosection/HerosectionHeader";

function CheckOut() {
    const cart = useSelector((state) => state.products.cart);
    function calculateSubtotal() {
        let subtotal = 0;
        cart.forEach((item) => {
            subtotal += item.quantity * item.salePrice;
        });
        return subtotal.toFixed(2);
    }
    let shipping = 50.0;
    // function calculateTotal() {
    //     // if (cart.length() === 0) {
    //     //     const total = 0
    //     // }
    //     const subtotal = calculateSubtotal();
    //     }
    //     const total = parseFloat(subtotal) + parseFloat(shipping);

    //     return total.toFixed(2);
    // }
    function calculateTotal() {
        if (cart.length === 0) {
            return 0; // Return 0 if the cart is empty
        }

        const subtotal = calculateSubtotal();
        const total = parseFloat(subtotal) + parseFloat(shipping);
        return total.toFixed(2);
    }

    return (
        <div>
            <div className="page-wrapper">
                <HerosectionHeader name={"Product Checkout"} folder1={"Shop"} />
                <div className="page-content">
                    <section>
                        <Container>
                            <div class="row justify-content-center mb-8 text-center">
                                <div class="col-lg-7 col-md-12">
                                    <div class="p-3 p-lg-5 shadow white-bg rounded">
                                        <label class="text-black mb-3">Enter your coupon code if you have one</label>
                                        <div class="input-group">
                                            <input class="form-control h-auto" id="c-code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" type="text" />
                                            <button class="btn btn-primary" type="button" id="button-addon2"><span>Apply Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Row >
                                <Col lg={8} md={12}>
                                    <div className="checkout-form border p-4 rounded">
                                        <h2 className="mb-4">Billing Details</h2>
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="fname" className="font-w-6">
                                                            First Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="fname"
                                                            placeholder="Your firstname"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="lname" className="font-w-6">
                                                            Last Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="lname"
                                                            placeholder="Your lastname"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="email" className="font-w-6">
                                                            E-mail Address
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="email"
                                                            placeholder="State Province"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="phone" className="font-w-6">
                                                            Phone Number
                                                        </Label>
                                                        <Input type="text" id="phone" placeholder="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="companyname" className="font-w-6">
                                                            Company Name
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="companyname"
                                                            placeholder="Company Name"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="country" className="font-w-6">
                                                            Select Country
                                                        </Label>
                                                        <Input
                                                            type="select"
                                                            id="country"
                                                            className="form-control"
                                                        >
                                                            <option>Select country</option>
                                                            <option value="#">Alaska</option>
                                                            <option value="#">China</option>
                                                            <option value="#">Japan</option>
                                                            <option value="#">Korea</option>
                                                            <option value="#">Philippines</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label for="address" className="font-w-6">
                                                            Address
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="address"
                                                            placeholder="Enter Your Address"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input
                                                            type="text"
                                                            id="address2"
                                                            placeholder="Second Address"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label for="towncity" className="font-w-6">
                                                            Town/City
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="towncity"
                                                            placeholder="Town or City"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="statename" className="font-w-6">
                                                            State/Province
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="statename"
                                                            placeholder="State Province"
                                                        />
                                                    </FormGroup>{" "}
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="zippostalcode" className="font-w-6">
                                                            Zip/Postal Code
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="zippostalcode"
                                                            placeholder="Zip / Postal"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                                <Col lg={4} md={12} className="mt-5 mt-lg-0">

                                    <div className="rounded p-4" style={{ backgroundColor: '#d0faec' }}>
                                        <h3 className="mb-3">Your Order</h3>
                                        <ul className="list-unstyled">
                                            {cart.map((item, index) => (
                                                <li
                                                    className="mb-3"
                                                    key={index}
                                                    style={{ display: 'flex', justifyContent: 'space-between' }}
                                                >
                                                    <span>
                                                        {item.quantity} x {item.name}
                                                    </span>
                                                    {" "} ${item.salePrice * item.quantity}
                                                </li>
                                            ))}
                                            <li className="mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>                                                <span>Shipping</span> $ {shipping}
                                            </li>
                                            <li className="mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Subtotal</span> $ {calculateSubtotal()}</li>
                                            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span><strong className="cart-total"> Total :</strong></span>  <strong className="cart-total">$ {calculateTotal()} </strong>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="my-6">
                                        <h3 className="mb-3">Payment Method</h3>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="radio" id="customRadio1" name="customRadio" className="form-check-input" />
                                                <label className="form-check-label" for="customRadio1">Direct Bank Tranfer</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="radio" id="customRadio2" name="customRadio" className="form-check-input" />
                                                <label className="form-check-label" for="customRadio2">Check Payment</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="radio" id="customRadio3" name="customRadio" className="form-check-input" />
                                                <label className="form-check-label" for="customRadio3">Paypal Account</label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                <label className="form-check-label" for="customCheck1">I have read and accept the terms and conditions</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary my-5">Proceed to Payment</button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
