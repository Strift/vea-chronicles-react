import React, { Component } from 'react'
import Page from '../Page/Page'
import Message from '../Message/Message'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: "Les rayons du soleil commençaient à percer à travers la fenêtre à votre réveil. La pièce était à demi-éclairée et vous commencez à apercevoir peu à peu le décor. Une chambre… un lit… vous êtes allongé et ne pouvez bouger. Impossible de vous rappeler ce que vous faites là... Votre mal de tête vous empêche de réfléchir et vous succombez de nouveau à la fatigue.",
      choices: [
        "Que fais-je ici ?",
        "Qui êtes-vous ?"
      ],
      next: false
    }
  }

  handleNext = () => {
    this.setState({ next: true })
  }

  renderPage = () => {
    return (
      <div>
        <Page 
          content={this.state.text}
          choices={this.state.choices}
          onEnd={this.handleNext}
        />
      </div>
    )
  }

  renderNext = () => {
    return (
      <Page content={<span>– <Message content="Réveillez-vous. " speed={10}/><Message content="Jeune [homme/femme], levez-vous." delay={1000} speed={20}/></span>} />
    )
  }

  render() {
    return (
      <div>
        {!this.state.next && this.renderPage()}
        {this.state.next && this.renderNext()}
      </div>
    )
  }
}
