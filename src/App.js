import React, { Component } from 'react'


class App extends Component {
  state = {

    text: "",
    contacts: []
  }

  switchInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  addContact = () => {
    console.log("clicked");
    this.setState({
      contacts: [...this.state.contacts, this.state.text]
    })
    
  }

  render() {

    console.log(this.state.text);

    const allContacts = this.state.contacts.map((contact) => {
      return <h1>{contact}</h1>
    })

    const names = ["Simon", "John", "Peter"];

    const allNames = names.map((name) => {
      return <h1>{name}</h1>
    });

    // const allNames = ["<h1>Telmo</h1>", "<h1>John</h1>", "<h1>Peter</h1>"]

    return (
      <div>

        <button onClick={this.addContact}>Add New Number</button>
        <input type="text" onChange={this.switchInput} />

        {allContacts}
        {allNames}
      </div>
    )
  }
}
export default App;