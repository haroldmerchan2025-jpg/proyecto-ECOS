import { Card, Button } from "react-bootstrap";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import "./Perfil.css";

function ProfileCard() {
  return (
    <Card className="profile-card">
      <div className="text-center">

        <FaUserCircle size={110} className="profile-avatar" />

        <h3>Nicolás Rodríguez</h3>

        <p className="text-secondary">
          nicolas@email.com
        </p>

        <Button className="btn-profile">
          <FaCamera /> Cambiar foto
        </Button>

      </div>
    </Card>
  );
}

export default ProfileCard;