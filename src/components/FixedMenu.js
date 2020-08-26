import React, { Component } from "react";

class FixedMenu extends Component {
  render() {
    return (
      <div
        className="ui left fixed vertical menu"
        style={{
          color: "white",
          borderTop: "3px solid #00E1FF",
          borderBottom: "3px solid #117EFF",
          background: "#1A1731",
          width: "70px",
        }}
      >
        <div className="item">
          <img
            className="ui mini image"
            src="./assets/images/logotipo.png"
            alt="Logotipo"
            style={{
              top: "40px",
              width: "40px",
              height: "24px",
            }}
          />
        </div>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/graficoPizza.png"
            style={{
              top: "123px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/rocket.png"
            style={{
              top: "143px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/users.png"
            style={{
              top: "163px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/cloud.png"
            style={{
              top: "183px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <div className="item" style={{ top: "203px" }}>
          <div
            style={{
              top: "203px",
              height: "1px",
              width: "36px",
              background:
                "transparent linear-gradient(90deg, #00E1FF 0%, #117EFF 100%) 0% 0% no-repeat padding-box",
            }}
          ></div>
        </div>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/linking.png"
            style={{
              top: "223px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/diamond.png"
            style={{
              top: "363px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/maintenance.png"
            style={{
              top: "363px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/transfer.png"
            style={{
              top: "363px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>

        <a className="item" href="#">
          <img
            className="ui mini image"
            src="./assets/icons/exit.png"
            style={{
              top: "363px",
              width: "30px",
              left: "2px",
              height: "31px",
              color: "#E4E6F1",
            }}
          />
        </a>
      </div>
    );
  }
}

export default FixedMenu;
