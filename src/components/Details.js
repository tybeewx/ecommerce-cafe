import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from"./Button";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const { id,img,info,ingredients,price,title,inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                                    <h1>
                                        {title}</h1>
                                </div>
                            </div>
                            {/*end title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text */}
                                <div className="text-center col-10 mx-auto col-md-6 my-3">
                                <h4 className ="text-title text-uppercase text-muted mt-3 mb-3">
                                    Vegan and Gluten-Free 
                                    </h4>
                                    <p className="text-muted lead">{info}
                                    </p>   
                                    <h4 className="text-blue text-capitalize">
                                        <strong> 
                                            price: <span>$</span>
                                            {price} 
                                        </strong>
                                        </h4>
                                    <p className="mt-3 mb-0 text-capitalize"> 
                                            ingredients: 
                                    </p>
                                    <p className="text-muted"> {ingredients}
                                    </p>
                                    {/* buttons */}
                                <div>
                                        <Link to ="/">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "Added to Cart" : "add to cart"}
                                        </ButtonContainer>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    );       
                }}
            </ProductConsumer>
        );
    }
}

export default Details;