import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard_usuario() {

    const usuario = JSON.parse(localStorage.getItem('usuario'))
    const [seccion, setSeccion] = useState("perfil");
    const navigate = useNavigate();

    const handleCerrarSesion = () => {
        localStorage.removeItem('usuario')
        navigate('/login')
    }

    const botonStyle = {
        background: 'transparent',
        color: '#909090',
        border: '1px solid #2a2a2a',
        borderRadius: '8px',
        textAlign: 'left'
    }

    const botonActivoStyle = {
        background: '#1a1a2e',
        color: '#d0d0d0',
        border: '1px solid #3a3a5a',
        borderRadius: '8px',
        textAlign: 'left'
    }

    const inputStyle = {
        background: '#0d0d0d',
        border: '1px solid #2a2a2a',
        color: '#e0e0e0',
        borderRadius: '8px'
    }

    return (
        <div style={{ background: '#050505', minHeight: '100vh' }}>
            <div className="container-fluid h-100 text-center">
                <div className="row h-100">

                    {/* Sidebar */}
                    <div className="col-md-3 col-lg-2 p-4" style={{ background: '#0a0a0a', borderRight: '1px solid #1a1a1a', minHeight: '100vh' }}>
                        <div>
                            <h2 style={{ color: '#8b8bbd', fontWeight: '500', fontSize: '20px', letterSpacing: '1px', marginBottom: '2rem' }}>
                                ECOS DASHBOARD USUARIO
                            </h2>
                        </div>
                        <div className="nav flex-column">
                            <button className="btn mb-3" style={seccion === "perfil" ? botonActivoStyle : botonStyle} onClick={() => setSeccion("perfil")}>
                                Mi perfil
                            </button>
                            <button className="btn mb-3" style={seccion === "publicaciones" ? botonActivoStyle : botonStyle} onClick={() => setSeccion("publicaciones")}>
                                Mis publicaciones
                            </button>
                            <button className="btn mb-3" style={seccion === "crear" ? botonActivoStyle : botonStyle} onClick={() => setSeccion("crear")}>
                                Crear publicación
                            </button>
                            <button className="btn mb-3" style={seccion === "configuracion" ? botonActivoStyle : botonStyle} onClick={() => setSeccion("configuracion")}>
                                Configuración
                            </button>
                            <button className="btn mt-3" style={{ background: '#1a0a0a', color: '#c08080', border: '1px solid #3a1a1a', borderRadius: '8px' }} onClick={handleCerrarSesion}>
                                Cerrar sesión
                            </button>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="col-md-9 col-lg-10 p-4">
                        <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '2rem', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>

                            {seccion === "perfil" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>Mi perfil</h2>
                                    <hr style={{ borderColor: '#1a1a1a' }} />
                                    <p style={{ color: '#b0b0b0' }}>Nombre: {usuario?.nombre}</p>
                                    <p style={{ color: '#b0b0b0' }}>Correo: {usuario?.email}</p>
                                    <p style={{ color: '#b0b0b0' }}>Fecha de nacimiento: {usuario?.fecha_nacimiento}</p>
                                </>
                            )}

                            {seccion === "publicaciones" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>Mis publicaciones</h2>
                                    <hr style={{ borderColor: '#1a1a1a' }} />
                                    <div style={{ background: '#050505', border: '1px solid #1a1a1a', borderRadius: '12px', marginBottom: '1rem' }}>
                                        <div style={{ padding: '1rem', color: '#b0b0b0' }}>Primera publicación</div>
                                    </div>
                                    <div style={{ background: '#050505', border: '1px solid #1a1a1a', borderRadius: '12px' }}>
                                        <div style={{ padding: '1rem', color: '#b0b0b0' }}>Segunda publicación</div>
                                    </div>
                                </>
                            )}

                            {seccion === "crear" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>Crear publicación</h2>
                                    <hr style={{ borderColor: '#1a1a1a' }} />
                                    <textarea className="form-control mb-3" rows="4" placeholder="¿Qué quieres compartir?" style={inputStyle} />
                                    <button className="btn" style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', borderRadius: '8px' }}>
                                        Publicar
                                    </button>
                                </>
                            )}

                            {seccion === "configuracion" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>Configuración</h2>
                                    <hr style={{ borderColor: '#1a1a1a' }} />
                                    <input className="form-control mb-3" placeholder="Cambiar correo" style={inputStyle} />
                                    <button className="btn" style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', borderRadius: '8px' }}>
                                        Guardar cambios
                                    </button>
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
