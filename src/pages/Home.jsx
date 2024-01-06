import React, { useState } from 'react'
import AllFoodItems from '../components/AllFoodItems'
import ALL_FOODS from '../data/ALL_FOODS'
import FoodItemFilter from '../components/FoodItemFilter'

const Home = () => {
  const [allFoodItems, setAllFoodItems] = useState(ALL_FOODS)

  return (
    <div className="min-vh-100 bg-body-secondary pt-3 pb-5">
      <div>
        <h1 className='text-center fs-4'>Food Item Menu</h1>
        <hr />

        <FoodItemFilter allFoodItems={allFoodItems} setAllFoodItems={setAllFoodItems} />

        <AllFoodItems allFoodItems={allFoodItems} />

      </div>
    </div>
  )
}

export default Home