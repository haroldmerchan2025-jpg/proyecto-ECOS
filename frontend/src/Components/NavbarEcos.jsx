import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

function NavbarEcos() {
  const navigate = useNavigate()
  const location = useLocation()

  const irASeccion = (id) => (e) => {
    e.preventDefault()

    if (location.pathname === '/') {
      // Ya estamos en la Landing, solo hacemos scroll
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Estamos en otra página, navegamos a / y luego hacemos scroll
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const irAInicio = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <Navbar expand="lg" sticky="top" style={{ background: '#050505', borderBottom: '1px solid #1a1a1a' }}>
      <Container>

        <Navbar.Brand href="/" onClick={irAInicio} style={{ color: '#8b8bbd', fontWeight: '500', fontSize: '22px', letterSpacing: '1px' }}>
          ECOS
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-navbar" />

        <Navbar.Collapse id="menu-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={irAInicio} style={{ color: '#909090' }}>Inicio</Nav.Link>
            <Nav.Link href="#acerca-de-ecos" onClick={irASeccion('acerca-de-ecos')} style={{ color: '#909090' }}>Acerca de ECOS</Nav.Link>
            <Nav.Link href="#publicaciones" onClick={irASeccion('publicaciones')} style={{ color: '#909090' }}>Publicaciones</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button href="/login" style={{ background: 'transparent', color: '#909090', border: '1px solid #2a2a2a' }} size="sm">Iniciar sesión</Button>
            <Button href="/registro" size="sm" style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a' }}>Registrarse</Button>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavbarEcos