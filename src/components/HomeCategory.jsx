import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomeCategory() {
  return (
    <div>
        <div class="container">
            <div class="product-container">
                <div class="product-images">
                    <img src='image/10.avif' alt="" />
                </div>
                <div class="product-see-details">
                    <span class="material-icons">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <span>MORE DETAILS</span>
                </div>
                <span class="product-new">NEW</span>
            </div>

            <div class="product-container">
                <div class="product-images">
                    <img src='image/11.avif' alt="" />
                </div>
                <div class="product-see-details">
                    <span class="material-icons">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <span>MORE DETAILS</span>
                </div>
                <span class="product-new">NEW</span>
            </div>

            <div class="product-container">
            <div class="product-images">
                <img src='image/12.avif' alt="" />
            </div>
            <div class="product-see-details">
                <span class="material-icons">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <span>MORE DETAILS</span>
            </div>
            <span class="product-new">NEW</span>
            </div>
        </div>
    </div>
  )
}

export default HomeCategory