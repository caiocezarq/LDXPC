import React from 'react';
import Grid from "react-fast-grid";
import styled, { withTheme } from 'styled-components';

export const Addven = () => (
  <Wrapper>
    <div style={styles.grid}>
    <h4>Cadastro de Vendedor</h4>
    <p>Insira os dados do vendedor:</p>
    <Grid container spacing={2} direction="row">
      <Grid item sm={6} xs={12}>
        <div>Código do Vendedor:</div>
        <input type="text" maxlength="36"/>
      </Grid>
      <Grid item sm={6} xs={12}>
        <div>Nome do Vendedor:</div>
        <input type="text" maxlength="50"/>
      </Grid>
      <Grid item sm={6} xs={12}>
        <div>Tabela de Preço Padrão:</div>
        <input type="number" min="0" max="9999" step="1"/>
      </Grid>
      <Grid item sm={6} xs={12}>
        <div>Data de Nascimento:</div>
        <input type="date" />
      </Grid>      
      <Grid item sm={6} xs={12}>
        <input type="submit" value="Cadastrar" />
      </Grid> 
    </Grid>
    </div>    
  </Wrapper>
)

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 4em;
  margin-right: 4em;
`;

const styles = {
  grid: {
    borderRadius: 10,
    border: "1px solid #3C3C3B",
    boxShadow: "0 10px 30px #BBB",
    padding: 8,
    margin: "10px",
    minWidth: "250px"
  }  
};
