import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Hero.css'

function Hero() {
  return (
    <div
  style={{
    backgroundImage: "url('https://wallpaper.forfun.com/fetch/05/0547b23d08a97d2e2787ef2cc4e1b670.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "130vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }}
>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">

            <Badge pill className="ecos-badge">
            Plataforma de contenido paranormal
            </Badge>

            <h1 style={{ color: '#e0e0e0', fontWeight: '500', fontSize: '42px', marginBottom: '1rem', letterSpacing: '1px' }}>
              Bienvenido a <span style={{ color: '#8b8bbd' }}>ECOS</span>
            </h1>

            <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.7', marginBottom: '2rem' }}>
              Comparte, explora y conecta con historias y experiencias paranormales.
              Una comunidad para los que creen en lo inexplicable.
            </p>

            <div className="d-flex gap-3 justify-content-center">
              <Button href="/registro" style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', padding: '10px 28px', borderRadius: '8px' }}>
                Registrarse
              </Button>
              <Button href="/login" style={{ background: 'transparent', color: '#909090', border: '1px solid #2a2a2a', padding: '10px 28px', borderRadius: '8px' }}>
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