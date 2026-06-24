import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Dashboard_admin() {

    const [seccion, setSeccion] = useState("usuarios");
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/usuarios/listar/")
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(err => console.error(err));
    }, []);

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

    return (
        <div style={{ background: '#050505', minHeight: '100vh' }}>

            <div className="container-fluid h-100 text-center">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 p-4" style={{ background: '#0a0a0a', borderRight: '1px solid #1a1a1a', minHeight: '100vh' }}>
                        <h2 className="mb-4 text-center" style={{ color: '#8b8bbd', fontWeight: '500', fontSize: '18px', letterSpacing: '1px' }}>
                            ECOS
                            <div>
                                <br className="mt-3" />
                                DASHBOARD ADMINISTRADOR
                            </div>
                        </h2>
                        <div className="nav flex-column">
                            <button
                                className="btn mb-3"
                                style={seccion === "usuarios" ? botonActivoStyle : botonStyle}
                                onClick={() => setSeccion("usuarios")}
                            >
                                Usuarios
                            </button>

                            <button
                                className="btn mb-3"
                                style={seccion === "publicaciones" ? botonActivoStyle : botonStyle}
                                onClick={() => setSeccion("publicaciones")}
                            >
                                Publicaciones
                            </button>

                            <button
                                className="btn mb-3"
                                style={seccion === "reportes" ? botonActivoStyle : botonStyle}
                                onClick={() => setSeccion("reportes")}
                            >
                                Reportes
                            </button>

                            <button
                                className="btn mb-3"
                                style={seccion === "configuracion" ? botonActivoStyle : botonStyle}
                                onClick={() => setSeccion("configuracion")}
                            >
                                Configuración
                            </button>

                            <button className="btn mt-3" style={{ background: '#1a0a0a', color: '#c08080', border: '1px solid #3a1a1a', borderRadius: '8px' }} onClick={handleCerrarSesion}>
                                Cerrar sesión
                            </button>

                        </div>
                    </div>

                    <div className="col-md-9 col-lg-10 p-4">

                        <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '2rem', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>

                            {seccion === "usuarios" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>
                                        Usuarios
                                    </h2>

                                    <p style={{ color: '#b0b0b0' }}>
                                        Aquí aparecerán los usuarios registrados.
                                    </p>

                                    <div style={{ overflowX: 'auto' }}>
                                        <table className="table" style={{ color: '#b0b0b0', marginTop: '1rem' }}>
                                            <thead>
                                                <tr style={{ borderBottom: '1px solid #1a1a1a' }}>
                                                    <th style={{ color: '#909090', borderColor: '#1a1a1a' }}>ID</th>
                                                    <th style={{ color: '#909090', borderColor: '#1a1a1a' }}>Nombre</th>
                                                    <th style={{ color: '#909090', borderColor: '#1a1a1a' }}>Apellido</th>
                                                    <th style={{ color: '#909090', borderColor: '#1a1a1a' }}>Correo</th>
                                                    <th style={{ color: '#909090', borderColor: '#1a1a1a' }}>Usuario</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {usuarios.map(usuario => (
                                                    <tr key={usuario.id} style={{ borderColor: '#1a1a1a' }}>
                                                        <td style={{ borderColor: '#1a1a1a' }}>{usuario.id}</td>
                                                        <td style={{ borderColor: '#1a1a1a' }}>{usuario.nombre}</td>
                                                        <td style={{ borderColor: '#1a1a1a' }}>{usuario.apellido}</td>
                                                        <td style={{ borderColor: '#1a1a1a' }}>{usuario.email}</td>
                                                        <td style={{ borderColor: '#1a1a1a' }}>{usuario.username}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}

                            {seccion === "publicaciones" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>
                                        Publicaciones
                                    </h2>

                                    <p style={{ color: '#b0b0b0' }}>
                                        Aquí aparecerán las publicaciones.
                                    </p>
                                </>
                            )}

                            {seccion === "reportes" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>
                                        Reportes
                                    </h2>

                                    <p style={{ color: '#b0b0b0' }}>
                                        Aquí aparecerán los reportes.
                                    </p>
                                </>
                            )}

                            {seccion === "configuracion" && (
                                <>
                                    <h2 style={{ color: '#e0e0e0', fontWeight: '500' }}>
                                        Configuración
                                    </h2>

                                    <p style={{ color: '#b0b0b0' }}>
                                        Configuración del sistema.
                                    </p>
                                </>
                            )}

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Dashboard_admin;
