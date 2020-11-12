import React, { Component } from 'react'

class AddNewFood extends Component {

    state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0
    }
    
    // abstraemos los handlers de más arriba por uno sólo
    handleChange = event => {
        // desestructuramos el name y el value de event.target. name = name, calories, image, quantity
        // value = the value (content) of name, calories, image and quantity.
        let { name, value } = event.target
        // usamos [] para configurar la key del objeto state con el value. It's a way to say that [name]
        // sometimes is name or calories or image or quantity within the state. 
        this.setState({ [name]: value})
    }

    handleFormSubmit = event => {
        // previene el comportamiento por default del formulario (recargar la página)
        event.preventDefault();
        // llamamos al método pasado desde App.js como prop y le pasamos el objeto del state con la nueva comida
        this.props.addTheFood(this.state);
        // limpiamos los campos del formulario
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    
                    <label htmlFor="calories">Calories: </label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="image">Image: </label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
};

export default AddNewFood;