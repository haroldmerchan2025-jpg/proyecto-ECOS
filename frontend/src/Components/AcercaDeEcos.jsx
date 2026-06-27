import { Container, Row, Col } from 'react-bootstrap'
import { FaBook, FaUsers, FaGhost } from 'react-icons/fa'

function AcercaDeEcos() {
  const items = [
    {
      icon: <FaBook size={28} />,
      titulo: 'Historias',
      texto: 'Comparte tus experiencias paranormales y descubre relatos de otras personas alrededor del mundo.'
    },
    {
      icon: <FaUsers size={28} />,
      titulo: 'Comunidad',
      texto: 'Conecta con personas que, como tú, creen en lo inexplicable y buscan respuestas más allá de lo común.'
    },
    {
      icon: <FaGhost size={28} />,
      titulo: 'Misterio',
      texto: 'Explora fenómenos sin explicación, avistamientos y testimonios documentados por la comunidad.'
    }
  ]

  return (
    <div id="acerca-de-ecos" style={{ background: '#0a0a0a', padding: '6rem 0' }}>
      <Container>

        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 style={{ color: '#e0e0e0', fontWeight: '500', fontSize: '34px', marginBottom: '1rem', letterSpacing: '1px' }}>
              Acerca de <span style={{ color: '#8b8bbd' }}>ECOS</span>
            </h2>
            <p style={{ color: '#b0b0b0', fontSize: '17px', lineHeight: '1.8' }}>
              ECOS es un espacio dedicado al contenido paranormal, donde la comunidad comparte
              experiencias, historias y evidencias de lo que no tiene explicación. Un lugar para
              quienes buscan entender lo desconocido y conectar con otros que sienten la misma curiosidad.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {items.map((item, index) => (
            <Col md={4} key={index}>
              <div 
              className="feature-card"
              style={{
                background: '#050505',
                border: '1px solid #1a1a1a',
                borderRadius: '16px',
                padding: '2rem',
                height: '100%',
                textAlign: 'center'
              }}>
                <div style={{ color: '#8b8bbd', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h5 style={{ color: '#e0e0e0', fontWeight: '500', marginBottom: '0.8rem' }}>
                  {item.titulo}
                </h5>
                <p style={{ color: '#909090', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {item.texto}
                </p>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  )
}

export default AcercaDeEcos