import React from "react";

import Lista from "./Lista";

import { options } from './Data';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SelectedVal: ""
    };
  }

  handleChange = e => {
    var value = e.target.value;

    this.setState({
      SelectedVal: value
    });
  };

  render() {
    return (
      <div className="App">
        <Lista
          id={"ddl1"}
          name={"ddloption"}
          options={options}
          title={"Opciones"}
          handleChange={this.handleChange}
          selectedValue={this.state.SeletedVal}
        />
      </div>
    );
  }
}

export default Dropdown;
