import React, { useState } from 'react';

function ReviewForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form submission or validation logic here
    };

    return (
        <div className="post-comments mt-5 pos-r bg-white rounded p-4" style={{backgroundColor: 'white'}}>
            <div className="section-title mb-3">
                <h5>Add REVIEW</h5>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages"></div>
                <div className="form-group">
                    <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        data-error="Name is required."
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                    <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        data-error="Valid email is required."
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group clearfix">
                    <select
                        className="form-control form-select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="">Rating -- Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        id="form_number"
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Type Comment"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        data-error="Please leave us a message."
                    ></textarea>
                    <div className="help-block with-errors"></div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Post Comment
                </button>
            </form>
        </div>
    );
}

export default ReviewForm;
