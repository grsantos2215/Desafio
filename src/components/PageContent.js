import React, { Component } from "react";

class PageContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <table
        className="ui very basic single line table"
        style={{
          width: "1200px",
          marginLeft: "600px",
          marginTop: "80px",
        }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Destinatários</th>
            <th>Sucesso</th>
            <th>Status</th>
          </tr>
        </thead>

        {/* Fazendo uma busca na Prop passada, e retornando com o próprio HTML */}
        {content.map(
          ({ id, name, recipients, success, status, statusName }) => {
            return (
              <tbody key={id}>
                <tr>
                  <td style={{ fontWeight: "bold" }}>{name}</td>
                  <td>{recipients}</td>
                  <td>{success}</td>
                  <td className="center aligned">
                    <img
                      src={`${status}.svg`}
                      className="ui image"
                      style={{ width: "30px", height: "30px" }}
                      alt="icon"
                    />
                    {statusName.map((data) => {
                      return (
                        <p style={{ marginTop: "-25px", marginLeft: "-25px" }}>
                          {data.nameStatus}
                        </p>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            );
          }
        )}
      </table>
    );
  }
}

export default PageContent;
