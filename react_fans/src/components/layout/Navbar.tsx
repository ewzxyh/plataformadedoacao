import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

import styles from "./Navbar.module.css";

import logo from "../../img/logo.png";
import account from "../../img/user.svg";

interface NavbarProps {
  username: string | null;
  handleLogout: () => void;
}


function Navigation({ username, handleLogout }: NavbarProps) {
  return (
    <div className={styles.nav_wrapper}>
      <div className={`${styles.navBar} navbar navbar-toggleable-sm navbar-expand-md bg-white`}>
        <div className="container">
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className={`${styles.logoNavBar} mx-auto`} href="/">
              <img src={logo} className={styles.logo} alt="" />
              <span className={styles.brandName}>OnlyGivers</span>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-justified w-100 nav-fill">
                <form className={`${styles.searchForm} d-flex`} role="search">
                  <input className={`${styles.searchInput} form-control me-2`} type="search" placeholder="Digite aqui..." aria-label="Search" />
                  <button className={`${styles.searchButton} btn`} type="submit">Pesquisar</button>
                </form>
                <Nav.Link href="#" className={styles.campanha}>Campanhas</Nav.Link>
                <Nav.Link href="#" className={styles.comoFunciona}>Como funciona</Nav.Link>
                <button className={`${styles.startButton} btn btn`} type="submit">Comece no OnlyGivers</button>
              </Nav>
              <Nav>
                {!username && (
                  <Nav.Link href="/login" className={styles.loginLink}>
                    <img src={account} className={styles.account} alt="Login" />
                  </Nav.Link>
                )}

                {username && (
                  <NavDropdown title={username} id="collasible-nav-dropdown" className={styles.dropDownMenu}>
                    <NavDropdown.Item href="/configuracoes">Configurações</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
