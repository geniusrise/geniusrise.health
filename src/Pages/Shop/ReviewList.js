import { useState } from 'react';

function ReviewList() {
    const [reviews] = useState([
        {
            name: 'Charlote Kerry',
            content: "It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!",
            stars: 5,
        },
        {
            name: 'Jesson Mart',
            content: 'May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank',
            stars: 4,
        },
    ]);

    return (
        <div className="media-holder review-list mt-5">
            {reviews.map((review, index) => (
                <div className="d-sm-flex mb-6 pb-5" key={index}>
                    <div className="flex-shrink-0">
                        <img className="img-fluid box-shadow me-4" alt="image1" src={require(`../../assets/images/thumbnail/0${index + 1}.jpg`)}
                        />
                    </div>
                    <div className="flex-grow-1 ms-sm-2 mt-4 mt-sm-0">
                        <h6>{review.name}</h6>
                        <p>{review.content}</p>
                        <span className="text-primary">
                            {Array.from({ length: review.stars }, (_, i) => (
                                <i key={i} className="las la-star"></i>
                            ))}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReviewList;
