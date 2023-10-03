function RatingList() {
    const ratings = [
        { stars: '5 Star', percentage: 90, color: 'bg-success' },
        { stars: '4 Star', percentage: 60, color: 'bg-success' },
        { stars: '3 Star', percentage: 40, color: 'bg-success' },
        { stars: '2 Star', percentage: 20, color: 'bg-warning' },
        { stars: '1 Star', percentage: 10, color: 'bg-danger' },
    ];

    return (
        <div className="row total-rating">
            <div className="col-md-6">
                <div className="bg-dark shadow-sm rounded text-center p-5">
                    <h5 className='text-white'>Overall</h5>
                    <h4 class="text-white">4.0</h4>
                    <h6 class="text-white">(03 Reviews)</h6>
                </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
                <div className="rating-list">
                    {ratings.map((rating, index) => (
                        <div className="d-flex align-items-center mb-2" key={index}>
                            <div className="text-nowrap me-3">{rating.stars}</div>
                            <div className="w-100">
                                <div className="progress" style={{ height: '5px' }}>
                                    <div
                                        className={`progress-bar ${rating.color}`}
                                        role="progressbar"
                                        style={{ width: `${rating.percentage}%` }}
                                        aria-valuenow={rating.percentage}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <span className="text-muted ms-3">{`${rating.percentage}%`}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RatingList;
