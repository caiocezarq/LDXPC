import React from 'react';
import Grid from "react-fast-grid";
import styled from 'styled-components';

export const Addcli = () => (
  <Wrapper>
    <div style={styles.grid}>
    <h4>Cadastro de Cliente</h4>
    <p>Insira os dados do cliente:</p>
    <Grid container spacing={2} direction="row">
      <Grid item sm={6} xs={12}>
        <div>Código do Cliente:</div>
        <input type="text" maxlength="36"/>
      </Grid>
      <Grid item sm={6} xs={12}>
        <div>Nome do Cliente:</div>
        <input type="text" maxlength="50"/>
      </Grid>
      <Grid item sm={6} xs={12}>      
      <div>Tipo de Pessoa:</div>
        <select>
          <option value="PF">PF - Pessoa Física</option>
          <option value="PJ">PJ - Pessoa Jurídica</option>            
        </select>        
      </Grid>
      <Grid item sm={6} xs={12}>
        <div>Código do Vendedor:</div>
        <input type="text" maxlength="36"/>
      </Grid> 
      <Grid item sm={6} xs={12}>
        <div>Limite de Crédito</div>
        <input type="number" step="0.01"/>
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
