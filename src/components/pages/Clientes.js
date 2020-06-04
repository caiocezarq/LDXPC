import React from 'react';
import Grid from "react-fast-grid";
import styled from 'styled-components';

/* Do mesmo modo, essa tela seria para listar os clientes após acionar o botão de Listar Todos ou por cliente,
utilizei apenas para testes de layout.

Ela não é utilizado em nenhuma outra parte do código.
*/

export const Clientes = (props) => (
  <Wrapper>
    <div style={styles.grid}>
    <Grid container spacing={2}>
      <Grid item xs>
        <h4>Clientes</h4>
      </Grid>
      <Grid item xs>
        Vendedor:
        <input type="text" value="001"/>        
      </Grid>
    </Grid>   
    </div>
    <div style={styles.grid}>
      <Grid container style={styles.gridroll}>
        <Grid item direction="column">          
          <Grid container direction="row" item xs={10}>             
               {Array(3).fill(0).map((_, i) =>
                 <Grid container key={i} style={styles.grid} spacing={2} item>
                   <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Código Cliente:</Grid>
                      <Grid item xs><input type="text" value="COD"/></Grid>                      
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Nome:</Grid>
                      <Grid item xs><input type="text" value="NOME"/></Grid>                      
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Tipo:</Grid>
                      <select>
                        <option value="PF">PF - Pessoa Física</option>
                        <option value="PJ">PJ - Pessoa Jurídica</option>            
                        </select>                    
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Vendedor:</Grid>
                      <Grid item xs><input type="text" value="VEND"/></Grid>
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Limite de Crédito:</Grid>
                      <Grid item xs><input type="number" step="0.01" value="3.21"/></Grid>
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={1}>
                      <Grid item xs><input type="submit" value="Editar" /></Grid>
                    </Grid>
               </Grid>
                )}             
          </Grid>
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
    borderRadius: 5,
    border: "1px solid #3C3C3B",
    boxShadow: "0 10px 30px #BBB",
    padding: 5,
    margin: "10px",    
   
  },
  gridin:{
    /*border: "1px groove #3C3C3B",
    boxShadow: "0 2px 1px #BBB",   */ 
    borderRadius: 5,
    margin: "5px",    
  },
  gridroll:{
    alignContent: "center",
    justify: "center",
    overflowY: "scroll",    
  }, 
};