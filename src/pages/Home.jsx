import React, { useState } from 'react'
import AllFoodItems from '../components/AllFoodItems'
import ALL_FOODS from '../data/ALL_FOODS'

const Home = () => {
  const [allFoodItems, setAllFoodItems] = useState(ALL_FOODS)

  return (
    <div className="min-vh-100 bg-body-secondary">
      <div>
        <h1 className='text-center fs-4 pt-2'>Food Item Menu</h1>
        <hr />

        <AllFoodItems allFoodItems={allFoodItems} />


      </div>
    </div>
  )
}

export default Home