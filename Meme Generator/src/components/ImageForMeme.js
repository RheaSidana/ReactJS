import React from "react";

export default class ImageForMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      inputTextBelow: false,
      text: "",
    };
    this.dropDownSelected = this.dropDownSelected.bind(this);
    this.changeText = this.changeText.bind(this);
    //this.reset = this.reset(this);
  }

  dropDownSelected(event) {
    let val = event.target.value;

    if (val === "1") {
      this.setState({
        input: true,
        inputTextBelow: false,
      });
    } else if (val === "2") {
      this.setState({
        input: true,
        inputTextBelow: true,
      });
    }
  }

  changeText(event) {
    this.setState({ text: event.target.value });
  }

  reset = () => {
    //console.log("Text " + this.state.text);
    this.setState({ text: "" });
  };

  cancel = () => {
    //console.log("Btn: "+ this.props.backBtn(this.props.imgKey));
    this.props.backBtn(this.props.imgKey);
  };

  confirm = () => {
    this.state.inputTextBelow === false
      ? this.props.memeConfirm(this.state.text, "top")
      : this.props.memeConfirm(this.state.text, "bottom");
  };

  render() {
    return (
      <div className=" border border-dark meme-container bg-white">
        {this.state.input === false ? (
          <select
            className="form-select my-2"
            aria-label="Default select example"
            onChange={this.dropDownSelected}
          >
            <option value="0">Select the position of text</option>
            <option value="1">Top of the image</option>
            <option value="2">Bottom of the image</option>
          </select>
        ) : (
          <div>
            <center>
              <h3>Add Text</h3>
              <textarea
                name="topText"
                id="topText"
                cols="50"
                rows="5"
                value={this.state.text}
                onChange={(e) => this.changeText(e)}
              ></textarea>
            </center>
          </div>
        )}
        <div className="mt-1">
          <img
            src={this.props.image}
            className="rounded-top rounded-bottom rounded mx-auto d-block"
            alt="Meme"
          />
        </div>
        {this.state.input ? (
          <div className="row mx-3 mt-2">
            <div className="col-4 d-grid">
              <button
                type="btn"
                className="btn btn-danger btn-block btn-lg"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
            <div className="col-4 d-grid">
              <button
                type="btn"
                className="btn btn-warning btn-block btn-lg"
                onClick={this.cancel}
              >
                Cancel
              </button>
            </div>
            <div className="col-4 d-grid">
              <button
                type="btn"
                className="btn btn-primary btn-block btn-lg"
                onClick={this.confirm}
              >
                Confirm
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
