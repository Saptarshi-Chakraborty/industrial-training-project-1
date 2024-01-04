import React from 'react'
import FoodItem from './FoodItem'

const AllFoodItems = ({ allFoodItems }) => {


    return (
        <div className="d-flex flex-column flex-lg-row justify-content-center gap-2 flex-wrap">

            {
                allFoodItems.map((food, index) => {
                    return <FoodItem key={index} food={food} id={index} />
                })
            }


        </div>
    )
}

export default AllFoodItems