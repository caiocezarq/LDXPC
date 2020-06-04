import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
/* Router dom é utilzado para navegação*/

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/',
                  name: 'Início',
                  css: 'fas fa-list',
                  key: 1
                },
                {
                  path: '/Addven',
                  name: 'Vendedores',
                  css: 'fas fa-user-plus',
                  key: 2
                },
                {
                  path: '/Addcli',
                  name: 'Clientes',
                  css: 'fas fa-wallet',
                  key: 3
                },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
    
`;

const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixar no scroll da tela */
    height: 100%;
    width: 60px;     /* Mesma da sidebar */
    z-index: 2;      
    top: 3.4em;      
    background-color: #3C3C3B;
    overflow-x: hidden;     /* Disabilitar scroll horizontal */
    padding-top: 40px;
    align-items: center;
`;

const StyledNavItem = styled.div`
    height: 70px;
    width: 60px; /* mesmo width da NavBar*/
    text-align: center; /* Alinha div no NavIcon */
    margin-bottom: 0;   /* Espaço entre NavItems */
    a {
        font-size: 2em;
        color: ${(props) => props.active ? "white" : "#009FE3"};
        :hover {
            opacity: 0.7;
            text-decoration: none;
        }  
    }
`;
