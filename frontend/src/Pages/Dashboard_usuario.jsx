import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard_usuario() {

    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const [seccion, setSeccion] = useState("perfil");

    const handleCerrarSesion = () => {
        localStorage.removeItem("usuario");
        navigate("/login");
    };

    const botonStyle = {
        background: 'transparent',
        color: '#909090',
        border: '1px solid #2a2a2a',
        borderRadius: '8px',
        textAlign: 'left'
    };

    const botonActivoStyle = {
        background: '#1a1a2e',
        color: '#d0d0d0',
        border: '1px solid #3a3a5a',
        borderRadius: '8px',
        textAlign: 'left'
    };

    const inputStyle = {
        background: '#0d0d0d',
        border: '1px solid #2a2a2a',
        color: '#e0e0e0',
        borderRadius: '8px'
    };

    return (
        <div style={{ background: '#050505', minHeight: '100vh' }}>
            <div className="container-fluid">
                <div className="row">

                    {/* SIDEBAR */}
                    <div className="col-md-3 col-lg-2 p-4"
                        style={{
                            background: '#0a0a0a',
                            borderRight: '1px solid #1a1a1a',
                            minHeight: '100vh'
                        }}>

                        <h4 style={{ color: '#8b8bbd', marginBottom: '2rem' }}>
                            ECOS DASHBOARD
                        </h4>

                        <div className="d-flex flex-column">

                            <button className="btn mb-3"
                                style={seccion === "perfil" ? botonActivoStyle : botonStyle}
                                onClick={() => setSeccion("perfil")}>
                                Mi perfil
                            </button>

                            <button className="btn mb-3"
                                style={seccion === "publicaciones" ? botonActivoStyle : botonStyle}
                                onClick={() => setSeccion("publicaciones")}>
                                Mis publicaciones
                            </button>

                            <button className="btn mb-3"
                                style={seccion === "configuracion" ? botonActivoStyle : botonStyle}
                                onClick={() => setSeccion("configuracion")}>
                                Configuración
                            </button>

                            <button className="btn mt-3"
                                style={{
                                    background: '#1a0a0a',
                                    color: '#c08080',
                                    border: '1px solid #3a1a1a',
                                    borderRadius: '8px'
                                }}
                                onClick={handleCerrarSesion}>
                                Cerrar sesión
                            </button>

                        </div>
                    </div>

                    {/* CONTENIDO */}
                    <div className="col-md-9 col-lg-10 p-4">

                        {/* PERFIL */}
                        {seccion === "perfil" && (
                            <div>

                                <h2 style={{ color: '#e0e0e0', marginBottom: '1.5rem' }}>
                                    Mi Perfil
                                </h2>

                                {/* TARJETA PERFIL */}
                                <div style={{
                                    background: '#0a0a0a',
                                    border: '1px solid #1a1a1a',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    marginBottom: '2rem'
                                }}>

{/* FOTO */}
 <div className="d-flex align-items-center mb-4">


    <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: '#1a1a2e',
        marginRight: '20px'
    }} />

    {/* INFO AL LADO */}
    <div>
        <h4 style={{ color: '#e0e0e0', marginBottom: '5px' }}>
            {usuario?.nombre}
        </h4>

        <p style={{ color: '#b0b0b0', marginBottom: '10px' }}>
            @{usuario?.username || "usuario123"}
        </p>

        <button className="btn btn-sm"
            style={{
                background: '#1a1a2e',
                color: '#d0d0d0',
                border: '1px solid #3a3a5a'
            }}>
            Cambiar foto
        </button>
    </div>

</div>

    {/* CAMPOS */}
        <div className="row">

            <div className="col-md-6 mb-3">
                <label style={{ color: '#b0b0b0' }}>Nombre completo</label>
                <input className="form-control"
                    defaultValue={usuario?.nombre}
                    style={inputStyle}
                    />
            </div>

                <div className="col-md-6 mb-3">
                    <label style={{ color: '#b0b0b0' }}>Usuario</label>
                    <input className="form-control"
                        defaultValue={usuario?.username || "usuario123"}
                        style={inputStyle}
                    />
            </div>
                <div className="col-md-6 mb-3">
                    <label style={{ color: '#b0b0b0' }}>Correo</label>
                    <input className="form-control"
                        defaultValue={usuario?.email}
                        style={inputStyle}
                    />
                </div>

                    <div className="col-md-6 mb-3">
                        <label style={{ color: '#b0b0b0' }}>Teléfono</label>
                        <input className="form-control"
                            defaultValue={usuario?.telefono || "3001234567"}
                            style={inputStyle}
                        />
                    </div>

                <div className="col-md-6 mb-3">
                    <label style={{ color: '#b0b0b0' }}>Fecha de registro</label>
                    <input className="form-control"
                        value="25/06/2026"
                        disabled
                        style={{ ...inputStyle, opacity: 0.6 }}
                    />
                </div>

                    <div className="col-md-6 mb-3">
                        <label style={{ color: '#b0b0b0' }}>Rol</label>
                        <input className="form-control"
                            value="Usuario"
                            disabled
                            style={{ ...inputStyle, opacity: 0.6 }}
                                            />
                        </div>

                    </div>

    {/* BOTONES */}
        <div className="text-end mt-3">

            <button className="btn me-2"
                style={{
                    background: '#1a1a2e',
                    color: '#d0d0d0',
                    border: '1px solid #3a3a5a'
                         }}>
                Guardar cambios
            </button>

        <button className="btn"
            style={{
                background: 'transparent',
                    color: '#c08080',
                    border: '1px solid #3a1a1a'
                        }}>
                Cancelar
        </button>

        </div>
    </div>

    {/* ESTADÍSTICAS */}
        <div style={{
            background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '16px',
                padding: '2rem'
            }}>

    <h5 style={{ color: '#e0e0e0', marginBottom: '1.5rem' }}>
        Mi Actividad
    </h5>

        <div className="row text-center">

            <div className="col-md-4">
                <h3 style={{ color: '#8b8bbd' }}>15</h3>
                <p style={{ color: '#b0b0b0' }}>Publicaciones</p>
            </div>

                <div className="col-md-4">
                    <h3 style={{ color: '#8b8bbd' }}>82</h3>
                    <p style={{ color: '#b0b0b0' }}>Me gusta</p>
                </div>

            <div className="col-md-4">
                    <h3 style={{ color: '#8b8bbd' }}>1200</h3>
                    <p style={{ color: '#b0b0b0' }}>Visualizaciones</p>
            </div>

        </div>

    </div>

</div>
)}

    {/* CONFIGURACIÓN */}
        {seccion === "configuracion" && (
            <h3 style={{ color: '#e0e0e0' }}>Configuración</h3>
        )}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard_usuario;