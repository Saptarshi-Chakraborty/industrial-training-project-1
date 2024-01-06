import { useState } from "react"
import ALL_FOODS from "../data/ALL_FOODS"



const FoodItemFilter = ({ allFoodItems, setAllFoodItems }) => {

    // All state variables
    const [allTypes, setAllTypes] = useState([])

    if (allTypes.length === 0) {
        getUniqueTypes()
    }

    function getUniqueTypes() {
        const uniqueTypes = ["All"]
        ALL_FOODS.forEach((foodItem) => {
            if (!uniqueTypes.includes(foodItem.type)) {
                uniqueTypes.push(foodItem.type)
            }
        })
        setAllTypes(uniqueTypes)
    }

    function changeAllFoodItems(type) {
        if (type === 'All') {
            setAllFoodItems(ALL_FOODS)
            return;
        }
        const filteredFoodItems = ALL_FOODS.filter((foodItem) => {
            return foodItem.type === type
        })
        setAllFoodItems(filteredFoodItems)
    }


    return (

        <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
            {
                allTypes.map((type, index) => {
                    return (
                        <button key={index} onClick={() => changeAllFoodItems(type)} className="btn btn-warning">{type}</button>
                    )
                })
            }
        </div>
    )
}

export default FoodItemFilter