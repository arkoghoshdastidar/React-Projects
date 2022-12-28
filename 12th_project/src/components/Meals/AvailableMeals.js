import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState, useEffect } from 'react';

const AvailableMeals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://food-app-72a96-default-rtdb.firebaseio.com/Meals.json').then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json();
    }).then((responseData) => {
      const mealsData = [];
      for (const key in responseData) {
        mealsData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setLoadedMeals(mealsData);
      setIsLoading(false);
    }).catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    })
  }, []);

  const mealsList = loadedMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {
        (isLoading) ? <p className={classes.loading}>Loading...</p> :
          ((httpError) ? <p className={classes.loading}>{httpError}</p> :
            <Card>
              <ul>{mealsList}</ul>
            </Card>)
      }
    </section>
  );
};

export default AvailableMeals;