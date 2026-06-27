import { Row, Col, Card } from "react-bootstrap";
import { FaBook, FaHeart, FaUsers } from "react-icons/fa";
import "./Perfil.css";

function ProfileStats() {
  return (
    <Row className="mt-4">

      <Col md={4}>
        <Card className="stats-card">
          <FaBook size={30}/>
          <h3>15</h3>
          <p>Historias</p>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="stats-card">
          <FaHeart size={30}/>
          <h3>84</h3>
          <p>Reacciones</p>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="stats-card">
          <FaUsers size={30}/>
          <h3>120</h3>
          <p>Seguidores</p>
        </Card>
      </Col>

    </Row>
  );
}

export default ProfileStats;