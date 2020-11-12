import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import Search from './components/Search';

class App extends Component {
  state = {
    foods: foods,
    isButtonActive: false,
    filteredFoodsList: foods
  };
  
  addFoodHandler = theFood => {
    // hacemos una copia del array de foods del state
    const foodsCopy = [...this.state.foods]
    // // le agregamos "manualmente" un nuevo id al objeto theFood que llega por parámetro
    // agregamos la nueva movie a la constante (copia del state) moviesCopy
    foodsCopy.push(theFood)
    // actualizamos el state para lograr una nueva renderización del componente con la nueva película agregada
    console.log("food before adding lettuce:", foodsCopy );
    //very important the filteredFoodsList is mandatory because we are using it
    // when we render the list. We are rendering with filteredFoodsList in the 
    // map. If we don't update the filteredFoodsList the renderization will not
    // work.
    this.setState({
      foods: foodsCopy, 
      filteredFoodsList: foodsCopy
    });
    console.log("food after adding lettuce: ", this.state.foods);
    this.showUnshowForm();
  }

  showUnshowForm = () => {
    this.setState({isButtonActive: !this.state.isButtonActive});
  }

  filterFoods = foodName => {
    const foodsFCopy = [...this.state.foods];
    const foodNameList = foodName.toLowerCase();
    const filteredFoods = foodsFCopy.filter(food => {
      return food.name.toLowerCase().includes(foodNameList);
    });
    this.setState({ filteredFoodsList: filteredFoods});
  };

  // renderizamos el componente AddNewFood con una prop (addTheFood) que representa al método addFoodHandler */} */}
  render () {
    return (
      <div className="App">   
        
        <input type="submit" value="Add new food" onClick={this.showUnshowForm}/>
        {this.state.isButtonActive && <AddNewFood addTheFood={this.addFoodHandler}/>}
        <Search filterFoods = {this.filterFoods}/> 
        <div>
          {this.state.filteredFoodsList.map((oneFood, index) => 
          <FoodBox key={index} oneFood={oneFood}/> )}
        </div>
      </div>
    )
  }
}

export default App;
