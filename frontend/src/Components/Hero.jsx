import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Hero() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">

            <Badge pill style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', color: '#909090', fontSize: '13px', marginBottom: '1rem', fontWeight: '400', padding: '6px 16px' }}>
              Plataforma de contenido paranormal
            </Badge>

            <h1 style={{ color: '#e0e0e0', fontWeight: '500', fontSize: '42px', marginBottom: '1rem', letterSpacing: '1px' }}>
              Bienvenido a <span style={{ color: '#8b8bbd' }}>ECOS</span>
            </h1>

            <p style={{ color: '#b0b0b0', fontSize: '18px', lineHeight: '1.7', marginBottom: '2rem' }}>
              Comparte, explora y conecta con historias y experiencias paranormales.
              Una comunidad para los que creen en lo inexplicable.
            </p>

            <div className="d-flex gap-3 justify-content-center">
              <Button style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', padding: '10px 28px', borderRadius: '8px' }}>
                Registrarse
              </Button>
              <Button style={{ background: 'transparent', color: '#909090', border: '1px solid #2a2a2a', padding: '10px 28px', borderRadius: '8px' }}>
                Iniciar sesión
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero