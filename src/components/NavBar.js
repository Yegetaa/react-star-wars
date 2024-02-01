import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <>
      <Nav className="justify-content-center" style={{display: "flex", justifyContent: "center"}}>
        <Nav.Item>
          <h3>STAR WAR SHIPS </h3>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;