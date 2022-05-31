import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ProductSlider() {
  return (
    <div>
        <h1 className='slider-title'>Latest Products</h1>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="product-carousel"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                <div className='image-container'>
                    <img className='slider-img' src="image/2.avif" alt="" />
                    <p className='product-name'>Red Top</p>
                    <div className="product-cart">
                        <button className='cart-btn'>Add to cart</button>
                    </div>
                </div>
                <div className='image-container'>
                    <img className='slider-img' src="image/2.avif" alt="" />
                    <p className='product-name'>Red Top</p>
                    <div className="product-cart">
                        <button className='cart-btn'>Add to cart</button>
                    </div>
                </div>
                <div className='image-container'>
                    <img className='slider-img' src="image/2.avif" alt="" />
                    <p className='product-name'>Red Top</p>
                    <div className="product-cart">
                        <button className='cart-btn'>Add to cart</button>
                    </div>
                </div>
                <div className='image-container'>
                    <img className='slider-img' src="image/2.avif" alt="" />
                    <p className='product-name'>Red Top</p>
                    <div className="product-cart">
                        <button className='cart-btn'>Add to cart</button>
                    </div>
                </div>
                <div className='image-container'>
                    <img className='slider-img' src="image/2.avif" alt="" />
                    <p className='product-name'>Red Top</p>
                    <div className="product-cart">
                        <button className='cart-btn'>Add to cart</button>
                    </div>
                </div>
                <div className='image-container'>
                    <img className='slider-img' src="image/2.avif" alt="" />
                    <p className='product-name'>Red Top</p>
                    <div className="product-cart">
                        <button className='cart-btn'>Add to cart</button>
                    </div>
                </div>
                
            </Carousel>;
    </div>
  )
}

export default ProductSlider
