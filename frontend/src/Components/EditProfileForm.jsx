import { Card, Form, Button } from "react-bootstrap";
import "./Perfil.css";

function EditProfileForm() {
  return (
    <Card className="profile-form">

      <h4 className="mb-4">Editar Perfil</h4>

      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Nombre completo"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control placeholder="Usuario"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control/>
        </Form.Group>

        <Button className="btn-profile">
          Guardar cambios
        </Button>

      </Form>

    </Card>
  );
}

export default EditProfileForm;