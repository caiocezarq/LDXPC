import React from 'react';
import Grid from "react-fast-grid";
import styled from 'styled-components';
import { GridVend} from './Gridven';

/*Variáveis exemplo para utilizar na exibição de dados*/
const state = {
  data: [
      {          
          cdvend: '1234',
          dsnome: 'Caio Queiroz',
          cdtab: '1',
          dtnasc: '25/11/1996',          
      }
  ]
}

export const Home = (props) => (  
  <Wrapper>
    <div style={styles.grid}>
    <Grid container spacing={2}>
      <Grid item xs>
        <h4>Vendedores</h4>
      </Grid>
      <Grid item xs>
        <input type="submit" value="Todos Clientes" />        
      </Grid>
    </Grid>   
    </div>
    <div style={styles.grid}>
      <Grid container style={styles.gridroll}>
        <Grid item direction="column">          
          <Grid container direction="row" item xs={10}>
            {/*/<GridVend data={this.state.data} />
            A ideia aqui era utilizar o Gridven.js para retornar os dados da consulta no Banco de Dados, como não foi
            possível executar essa implementação, utilizei campos de inpute para exemplos de dados para listagem e
            teste de layout
            */}          
               {Array(3).fill(0).map((_, i) =>
                 <Grid container key={i} style={styles.grid} spacing={2} item>
                   <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Código Vendedor:</Grid>                      
                      <Grid item xs><input type="text" value="COD TESTE"/></Grid>
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Nome:</Grid>
                      <Grid item xs><input type="text" value="NOME TESTE"/></Grid>                      
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Tabela Padrão:</Grid>
                      <Grid item xs><input type="number" value="0"/></Grid>                     
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs>Data de Nascimento:</Grid>
                      <Grid item xs><input type="date"/></Grid>
                    </Grid>
                    <Grid container style={styles.gridin} item spacing={2} xs={2}>
                      <Grid item xs><input type="submit" value="Mostrar Clientes" /></Grid>
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
    padding: 8,
    margin: "10px",    
   
  },
  gridin:{
    borderRadius: 5,
    margin: "5px",    
  },
  gridroll:{
    alignContent: "center",
    justify: "center",
    overflowY: "scroll",    
  }, 
};