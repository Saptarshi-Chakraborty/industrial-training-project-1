import React from 'react'
import { Link } from 'react-router-dom'

const FoodItem = ({ food, id }) => {
    return (
        <div class="card m-auto" style={{ "width": "300px" }}>
            <img src={food.image} class="card-img-top" alt={food.name} />
            <div class="card-body">
                <h4 class="card-title">{food.name}</h4>
                <p class="card-text fs-6 fw-bold">{food.type}</p>
                <div className='d-flex w-100 justify-content-between'>
                    <span>Price : {food.price}</span>

                    <Link to={`/orders/${id}`} class="btn btn-primary">Order Now</Link>
                </div>
            </div>
        </div>
    )
}

export default FoodItem