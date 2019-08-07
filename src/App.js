import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";
import RandomQuote from "./RandomQuote"
import GenerateQuote from "./GenerateQuote";

const quote =
        {
            "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
            "character": "Nelson Muntz",
            "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
            "characterDirection" : "Left"
        };


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            working: true,
            quote: quote
        };
    }

    handleClick = () => {
        this.setState({ working: !this.state.working});
    };

    getQuote() {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        //fetch("./testquote.json")
            .then(response  =>  response.json())
            .then(data  => {
                this.setState({
                    quote:  {
                        character: data[0].character,
                        image: data[0].image,
                        quote: data[0].quote
                    }
                });
            });
    }



    render() {
        const working = this.state.working ? 'working' : 'relaxing';
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className={working} alt="logo" />
              <button
                  type="button"
                  onClick={this.handleClick}
              >
                  {working.toUpperCase()}
              </button>
            <h1 className="App-title">Simpsons Quotes</h1>
          </header>
            <Lamp on />
            <Lamp />
            <hr />
            <GenerateQuote selectQuote={() =>  this.getQuote()} />
            <RandomQuote className="App-header" quote={this.state.quote.quote} character={this.state.quote.character} image={this.state.quote.image}/>
            <hr />
          <Quote
              quote="Me fail English? That's unpossible"
              character="Ralph Wiggum"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
          />
          <Quote
              quote="I believe the children are the future... Unless we stop them now!"
              character="Homer Simpson"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
          />
          <Quotes />
        </div>
    );
  }
}

export default App;