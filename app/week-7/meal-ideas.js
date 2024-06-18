'use client'
import { useState, useEffect } from "react";



export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas() {
        try {
          response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.error("Error:", error);
        }
      }

    function loadMealIdeas() {
        setMeals(fetchMealIdeas({ingredient}));
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

        console.log(meals.length);
    return (
        <div className="p-2 m-4 bg-slate-900 text-yellow-400 max-w-sm">
            <h2 className="text-xl font-bold">Meal Ideas</h2>
            
            {meals === null ? (
            <p className='text-sm'>Here are some meal ideas using {ingredient}</p> // Replace 'A' with the JSX you want to render when meals is null
            ) : (  
            <p className='text-sm'>No meal ideas found for {ingredient}</p> // Replace 'A' with the JSX you want to render when meals is null  
            )}
            
            {(meals.length > 0) &&
            (<ul>
                {meals.map((meal) => {
                    return <li key={meal.idMeal} 
                            className="text-sm">
                                {meal.strMeal}
                            </li>
                })}
            </ul>)}
        </div>
    )


}
