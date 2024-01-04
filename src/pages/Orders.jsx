import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OrderDetailsForm from "../components/OrderDetailsForm";
import { useParams } from "react-router-dom";
import ALL_FOODS from "../data/ALL_FOODS";


const Order = () => {
    const { itemId } = useParams();

    const [orderDetails, setOrderDetails] = useState({
        ...ALL_FOODS[itemId],
        noOfItem: 1,
    })

    return (
        <div className="min-vh-100 bg-body-secondary">
            <div>
                <h1 className='text-center fs-4 pt-2'>Order Food Item</h1>
                <hr />

                <div className="container-fluid">
                    <OrderDetailsForm orderDetails={orderDetails} setOrderDetails={setOrderDetails} />

                </div>




            </div>
        </div>
    )
}


export default Order
