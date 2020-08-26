import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

function TopContent({ filter, onChangeFilter }) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  function handleInputChange(event) {
    const newText = event.target.value;
    onChangeFilter(newText);
  }

  return (
    <div
      className="very padded text container segment"
      style={{ height: "100px", marginLeft: "200px", marginTop: "48px" }}
    >
      <div className="ui big horizontal list">
        {/* Imagem de Usuário */}
        <div className="item">
          <img
            style={{ border: "1px solid lightgray" }}
            className="ui avatar image"
            src="./assets/images/user.png"
          />
        </div>

        {/* Logo Acme */}
        <div className="item">
          <div
            className="ui label"
            style={{ background: "white", border: "1px solid lightgray" }}
          >
            <img src="./assets/images/acme-logo.png" />
          </div>
        </div>

        {/* Busca */}
        <div className="item" style={{ marginLeft: "700px" }}>
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              onChange={handleInputChange}
              value={filter}
              type="text"
              placeholder="Busca"
              style={{ width: "500px" }}
            />
          </div>
        </div>

        {/* Botão com Modal */}
        <div className="item">
          <Modal
            onClose={() => dispatch({ type: "close" })}
            open={open}
            size={size}
            trigger={
              <Button
                className="primary"
                onClick={() => dispatch({ type: "open", size: "mini" })}
              >
                <i className="icon plus"></i>Nova Jornada
              </Button>
            }
          >
            <Modal.Header>Nova Jornada</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Dê um nome para essa Jornada</Header>
                <div className="ui input">
                  <input type="text" style={{ width: "335px" }} />
                </div>
                <p>Você poderá alterar essa informação depois</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <button
                class="ui big positive basic button"
                onClick={() => dispatch({ type: "close" })}
              >
                Continuar
              </button>
              <button
                class="ui negative basic button"
                onClick={() => dispatch({ type: "close" })}
              >
                Cancelar
              </button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
