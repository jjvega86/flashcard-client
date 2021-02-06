import React, {Component} from 'react';
import Table from './components/Table/table.jsx';
import Form from './components/Table/form.jsx';

class App extends Component {
    state = {
        characters: [] 
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i!== index
            }),
        })
    }

    handleSubmit = (character) =>{
        this.setState({characters: [...this.state.characters, character]})
    }

    render(){ // class component must contain render(){} and return only one parent element 
        const {characters} = this.state

        return(
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App;