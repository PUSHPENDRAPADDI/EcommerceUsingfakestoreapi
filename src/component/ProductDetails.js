import React from 'react';
import './ProductDetails.css';
const product = {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 7.17,
    "rating": 4.94,
    "stock": 5,
    "tags": [
      "beauty",
      "mascara"
    ],
    "brand": "Essence",
    "sku": "RCH45Q1A",
    "weight": 2,
    "dimensions": {
      "width": 23.17,
      "height": 14.43,
      "depth": 28.01
    },
    "warrantyInformation": "1 month warranty",
    "shippingInformation": "Ships in 1 month",
    "availabilityStatus": "Low Stock",
    "reviews": [
      {
        "rating": 2,
        "comment": "Very unhappy with my purchase!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "John Doe",
        "reviewerEmail": "john.doe@x.dummyjson.com"
      },
      {
        "rating": 2,
        "comment": "Not as described!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Nolan Gonzalez",
        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
      },
      {
        "rating": 5,
        "comment": "Very satisfied!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Scarlett Wright",
        "reviewerEmail": "scarlett.wright@x.dummyjson.com"
      }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 24,
    "meta": {
      "createdAt": "2024-05-23T08:56:21.618Z",
      "updatedAt": "2024-05-23T08:56:21.618Z",
      "barcode": "9164035109868",
      "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    },
    "images": [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
  }
  
function ProductDetails() {
  return (
    <div className="product-details-container">
      <div className="product-card-neomorphic">
        <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
        
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-availability">
            Availability: {product.availabilityStatus}
          </p>
          <p className="product-sku">SKU: {product.sku}</p>
          
          <div className="product-tags">
            {product.tags.map((tag, index) => (
              <span key={index} className="product-tag">{tag}</span>
            ))}
          </div>
          
          <div className="product-reviews">
            <h3>Customer Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.reviewerName}</strong> rated it {review.rating} stars</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="warranty-info">
            <p>{product.warrantyInformation}</p>
          </div>
          <p className="return-policy">{product.returnPolicy}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
