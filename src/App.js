import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container component="div" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro onSubmit={onSubmit} />
      </Container>

    );
  }
}

function onSubmit(dados){
  console.log(dados);
}

export default App;