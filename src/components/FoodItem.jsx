import React from 'react'
import { Link } from 'react-router-dom'

const FoodItem = ({ food, id }) => {
    return (
        <div className="card m-auto" style={{ "width": "300px" }}>
            <img src={food.image} className="card-img-top" alt={food.name} />
            <div className="card-body">
                <h4 className="card-title">{food.name}</h4>
                <p className="card-text fs-6 fw-bold">{food.type}</p>
                <div className='d-flex w-100 justify-content-between'>
                    <span>Price : {food.price}</span>

                    <Link to={`/orders/${id}`} className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        </div>
    )
}

export default FoodItem