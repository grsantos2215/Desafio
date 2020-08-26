import React, { Component } from "react";

class LateralSelector extends Component {
  render() {
    const { filters } = this.props;

    return (
      <div
        className="ui middle aligned list"
        style={{ marginLeft: "150px", width: "200px", float: "left" }}
      >
        <h3 className="ui header" style={{ marginBottom: "45px" }}>
          Jornadas
        </h3>
        {filters.map(({ id, nameStatus, quantity }) => {
          return (
            <div className="item" key={id}>
              <div className="right floated">
                <label className="ui circular label">{quantity}</label>
              </div>
              <img className="ui avatar image" src={`${id}.svg`}></img>
              <div className="content" style={{ fontWeight: "bold" }}>
                <a href="#">{nameStatus}</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LateralSelector;
