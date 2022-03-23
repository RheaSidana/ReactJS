import React from "react";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
    };
  }
  assignVoting(person_age) {
    if (person_age >= 18) return "can vote";
    return "cannot vote";
  }
  changeState = () => {
    //   let person_age = this.state.age+1;
    //   console.log("Age: "+person_age);
    // this.state.age = this.state.age+1;
    //this.state.canVote = this.assignVoting();
    this.setState({ age: this.state.age + 1 });
  };
  render() {
    return (
      <center>
        <h1>
          The Person: {this.state.name} of age: {this.state.age}
        </h1>
        <h3>Voting status: {this.assignVoting(this.state.age)}</h3>
        <button type="button" onClick={this.changeState}>
          After one year
        </button>
      </center>
    );
  }
}

export default Person;
