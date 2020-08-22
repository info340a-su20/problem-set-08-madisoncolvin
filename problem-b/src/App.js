import React, { Component } from 'react'; //import React Component

/* Step two */
import "./style.css";
import _ from 'lodash';

/* Step one + step 8 modifications */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pets: this.props.pets };
  }

 /* Step 9 */
  adopt = (name) => {
    this.setState((state) => {
      let petName = _.find(state.pets, ["name", name]);
      return petName.adopted = true;
    })
  }
  
  render() {
    
    return (
      <div>
        <header className = "jumbotron jumbotron-fluid py-4">
          <div className = "container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className = "container">
          <div className = "row">
            <div id = "navs" className = "col-3">
              <BreedNav breeds = { Object.keys(_.groupBy(this.state.pets, "breed")) }/>
              <AboutNav/>
            </div>
            <div id = "petList" className = "col-9" >
              <PetList pets = { this.state.pets } adoptCallback = { this.adopt } />
            </div>
          </div>
        </main>

        <footer className = "container">
          <small>Images from Seattle Humane Society</small>
        </footer>
      </div>
    );
  }
}

/* Step three */
class AboutNav extends Component {
  render() {

    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className = "list-unstyled">
          <li> <a href = "index.html">How to Adopt</a> </li>
          <li> <a href = "index.html">Volunteering</a> </li>
          <li> <a href = "index.html">Events</a> </li>
          <li> <a href = "index.html">Donate</a> </li>
          <li> <a href = "index.html">About Us</a> </li>
        </ul>
      </nav>
    );
  }
}

export default App;

/* Step five */
class BreedNav extends Component {
  render() {

    let breeds = this.props.breeds;
    let maps = breeds.map((breed) => {
      return <li key = { breed }> <a href = "#/">{breed}</a> </li>
    });
    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className = "list-unstyled">
          { maps }
        </ul>
      </nav>
    );
  }
}

/* Step six + step 10 modifications*/
class PetCard extends Component {
  render() {

    let petName = this.props.pet.name;
    if (this.props.pet.adopted === true) {
      petName = petName + " (Adopted)";
    }
    let petCards =
      (<div className = "card" onClick={(event) => { this.props.adoptCallback(this.props.pet.name) }}>
      <img className = "card-img-top" src = { this.props.pet.img } alt = { this.props.pet.name } />
      <div className = "card-body">
      <h3 className = "card-title">{petName}</h3>
      <p className = "card-text">{this.props.pet.sex + " " + this.props.pet.breed}</p>
      </div>
      </div>);
    return petCards;
  }
}

/* Step seven + step 10 modifications */
class PetList extends Component {
  render() {

    let petList = this.props.pets
    let maps = petList.map((petCard) => 
      <PetCard key = { petCard.name } adoptCallback = { this.props.adoptCallback } pet = { petCard }/>)
    return (
      <div>
        <h2>Dogs for Adoption</h2>
          { maps }
      </div>
    );
  }
}