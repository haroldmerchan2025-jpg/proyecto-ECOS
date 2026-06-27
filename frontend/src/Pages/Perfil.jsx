import { Container, Row, Col } from "react-bootstrap";

import NavbarEcos from "../Components/NavbarEcos";
import ProfileCard from "../Components/ProfileCard";
import EditProfileForm from "../Components/EditProfileForm";
import ProfileStats from "../Components/ProfileStats";

function Perfil() {
  return (
    <>
      <NavbarEcos />

      <Container className="py-5">

        <Row>

          <Col lg={4}>
            <ProfileCard />
          </Col>

          <Col lg={8}>
            <EditProfileForm />
          </Col>

        </Row>

        <ProfileStats />

      </Container>
    </>
  );
}

export default Perfil;