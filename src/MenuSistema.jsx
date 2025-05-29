import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

function MenuSistema(props) {
  return (
    <Menu inverted>
      <Menu.Item
        content="Home"
        active={props.tela === "Tela inicial"}
        as={Link}
        to="/"
      />

      <Dropdown item text="Clientes">
        <Dropdown.Menu>
          <Dropdown.Item
            text="Cadastro Cliente"
            active={props.tela === "Cadastro Cliente"}
            as={Link}
            to="/form-cliente"
          />
          <Dropdown.Item
            text="Login Cliente"
            active={props.tela === "Login Cliente"}
            as={Link}
            to="/login-cliente"
          />
        <Menu.Item
        content="Agendamento"
        active={props.tela === "Agendamento"}
        as={Link}
        to="/form-agendamento"
      />
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item
        content="Barbeiro"
        active={props.tela === "Cadastrar barbeiro"}
        as={Link}
        to="/form-barbeiro"
      />
    </Menu>
  );
}

export default MenuSistema;
