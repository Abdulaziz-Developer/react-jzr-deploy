import React from "react";
import alphabetData from "./alphabet.json";
import Card from "./card";

class YourName extends React.Component {
  state = {
    name: {},
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // handleName = () => {

  // result = alphabetData.array.filter((name) => name.alphabet == inputAlph);
  //   const cardItem = result.map((letter) => (
  //     <Card alphabet={letter.alphabet} />
  //   ));
  // };

  render() {
    return (
      <>
        <div className="Yourname-div">
          <h1>لدينا هدية لك !</h1>
          <h1>اكتب اسمك باللغة العربية </h1>
          <input
            onChange={this.handleChange}
            name="name"
            className="input-name"
            type="text"
            placeholder="اكتب اسمك..."
          ></input>
          <div>
            <Card inputAlph={this.state.name} />
          </div>
        </div>
      </>
    );
  }
}

export default YourName;
