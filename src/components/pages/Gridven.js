import React from 'react';
import Grid from "react-fast-grid";
import styled from 'styled-components';

/*
Aqui seria retornado os dados para a tela Home, listando os vendedores.

export const GridVend = ({data}) => {        
        {data.map((item, index)) =>
          <Grid container key={i} style={styles.grid} spacing={2} item>
            <Grid container style={styles.gridin} item spacing={2} xs={2}>
              <Grid item xs>Código Vendedor:</Grid>                      
              <Grid item xs>{item.cdvend}</Grid>
            </Grid>
            <Grid container style={styles.gridin} item spacing={2} xs={2}>
              <Grid item xs>Nome:</Grid>
              <Grid item xs>{item.dsnome}</Grid>                      
            </Grid>
            <Grid container style={styles.gridin} item spacing={2} xs={2}>
              <Grid item xs>Tabela Padrão:</Grid>
              <Grid item xs>{item.cdtab}</Grid>                     
            </Grid>
            <Grid container style={styles.gridin} item spacing={2} xs={2}>
              <Grid item xs>Data de Nascimento:</Grid>
              <Grid item xs>{item.dtnasc}</Grid>
            </Grid>
            <Grid container style={styles.gridin} item spacing={2} xs={2}>
              <Grid item xs><input type="submit" value="Mostrar Clientes" /></Grid>
              </Grid>
        </Grid>
       }    
}*/

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
}