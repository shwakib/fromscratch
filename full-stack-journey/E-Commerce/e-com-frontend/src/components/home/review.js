import React from 'react';

const Review = item => {
    // console.log(review.review._id);
    // alert(review._id);
    return (
        <div>
            <h3>Reviews for this product</h3>
            Customer: <h5 style={{ display: "inline" }}>{item.item.user.name}</h5> (<i>{item.item.star} Stars</i>)
            <p style={{ marginTop: "5px" }}>Comment about his order: {item.item.comment}</p>
        </div>
    )
}

export default Review;