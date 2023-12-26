import React from 'react';
import './ProductReview.scss';

const ProductReview = () => {
  return (
    <div>
      <section className="review-section">
        <header className="review-header">
          <h3>
            상품후기<span className="rev-num">(0)</span>
          </h3>
        </header>
        <div className="review-box">
          <div className="review-data">
            <h3>앗!</h3>
            <p className="ment">첫 번째 후기를 남겨주세요.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductReview;
