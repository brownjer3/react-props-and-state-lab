import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  listPets = () => {
    return this.props.pets.map((pet) => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>)
  }

  render() {
    return <div className="ui cards">
      {this.listPets()}
    </div>
  }
}

export default PetBrowser
