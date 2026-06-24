import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard_usuario.css";

function Dashboard_usuario() {

    const usuario = JSON.parse(localStorage.getItem('usuario'))
    const [seccion, setSeccion] = useState("perfil");
    const navigate = useNavigate();

    const handleCerrarSesion = () => {
        localStorage.removeItem('usuario')
        navigate('/login')
    }

    return (
        <div className="background vh-100">
            <div className="container-fluid h-100 text-center">
                <div className="row h-100">

                    {/* Sidebar */}
                    <div className="col-md-3 col-lg-2 bg-dark p-4">
                        <div>
                            <h2 className="text-white mb-4">
                                ECOS DASHBOARD USUARIO
                            </h2>
                        </div>
                        <div className="nav flex-column">
                            <button className="btn btn-outline-light mb-3" onClick={() => setSeccion("perfil")}>
                                Mi perfil
                            </button>
                            <button className="btn btn-outline-light mb-3" onClick={() => setSeccion("publicaciones")}>
                                Mis publicaciones
                            </button>
                            <button className="btn btn-outline-light mb-3" onClick={() => setSeccion("crear")}>
                                Crear publicación
                            </button>
                            <button className="btn btn-outline-light mb-3" onClick={() => setSeccion("configuracion")}>
                                Configuración
                            </button>
                            <button className="btn btn-danger mt-3" onClick={handleCerrarSesion}>
                                Cerrar sesión
                            </button>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="col-md-9 col-lg-10 p-4">
                        <div className="bg-dark rounded-5 p-4 shadow">

                            {seccion === "perfil" && (
                                <>
                                    <h2 className="text-white">Mi perfil</h2>
                                    <hr className="text-secondary" />
                                    <p className="text-white">Nombre: {usuario?.nombre}</p>
                                    <p className="text-white">Correo: {usuario?.email}</p>
                                    <p className="text-white">Fecha de nacimiento: {usuario?.fecha_nacimiento}</p>
                                </>
                            )}

                            {seccion === "publicaciones" && (
                                <>
                                    <h2 className="text-white">Mis publicaciones</h2>
                                    <hr className="text-secondary" />
                                    <div className="card bg-secondary text-white mb-3">
                                        <div className="card-body">Primera publicación</div>
                                    </div>
                                    <div className="card bg-secondary text-white">
                                        <div className="card-body">Segunda publicación</div>
                                    </div>
                                </>
                            )}

                            {seccion === "crear" && (
                                <>
                                    <h2 className="text-white">Crear publicación</h2>
                                    <hr className="text-secondary" />
                                    <textarea className="form-control mb-3" rows="4" placeholder="¿Qué quieres compartir?" />
                                    <button className="btn border-white text-white background">Publicar</button>
                                </>
                            )}

                            {seccion === "configuracion" && (
                                <>
                                    <h2 className="text-white">Configuración</h2>
                                    <hr className="text-secondary" />
                                    <input className="form-control mb-3" placeholder="Cambiar correo" />
                                    <button className="btn border-white text-white background">Guardar cambios</button>
                                </>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard_usuario;