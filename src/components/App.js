import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    const newType = e.target.options[e.target.selectedIndex].value
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  fetchPets = () => {
    // debugger
    if (this.state.filters.type === 'all') {
      fetch(`/api/pets`)
      .then(r => r.json())
      .then(fetchedPets => {
        this.setState({pets: fetchedPets})
      })
    } else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r => r.json())
      .then(fetchedPets => {
        this.setState({pets: fetchedPets})
      })
    }
  }

  adoptPet = (id) => {
    const pet = this.state.pets.find((pet) => pet.id === id)
    pet.isAdopted = true
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
