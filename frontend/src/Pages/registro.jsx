import { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function Registro() {
    const navigate = useNavigate()
    const [registro, setRegistro] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        fecha_nacimiento: "",
        contraseña: "",
        con_contraseña: ""
    })

    const handleRegistro = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/usuarios/registro/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: registro.correo,
                    email: registro.correo,
                    nombre: registro.nombre,
                    apellido: registro.apellido,
                    fecha_nacimiento: registro.fecha_nacimiento,
                    password: registro.contraseña,
                    confirmar_contrasena: registro.con_contraseña
                })
            })
            const data = await response.json()
            if (response.ok) {
                localStorage.setItem('usuario', JSON.stringify(data))
                navigate('/dashboard_usuario')
            } else {
                alert(JSON.stringify(data))
            }
        } catch (error) {
            alert("Error al conectar con el servidor")
        }
    }

    const inputStyle = {
        background: '#0d0d0d',
        border: '1px solid #2a2a2a',
        color: '#e0e0e0',
        borderRadius: '8px'
    }

    return (
        <div style={{ background: '#050505', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '2.5rem', width: '90%', maxWidth: '500px', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>

                <h1 style={{ color: '#8b8bbd', fontWeight: '500', marginBottom: '0.2rem', letterSpacing: '4px' }}>ECOS</h1>
                <h2 style={{ color: '#e0e0e0', fontSize: '20px', marginBottom: '2rem', fontWeight: '400' }}>Registro</h2>

                <h6 style={{ color: '#909090', marginBottom: '4px', fontSize: '13px' }}>Nombres</h6>
                <input className="form-control mb-3" type="text" placeholder="Nombres"
                    value={registro.nombre}
                    onChange={(e) => setRegistro({ ...registro, nombre: e.target.value })}
                    style={inputStyle}
                />

                <h6 style={{ color: '#909090', marginBottom: '4px', fontSize: '13px' }}>Apellidos</h6>
                <input className="form-control mb-3" type="text" placeholder="Apellidos"
                    value={registro.apellido}
                    onChange={(e) => setRegistro({ ...registro, apellido: e.target.value })}
                    style={inputStyle}
                />

                <h6 style={{ color: '#909090', marginBottom: '4px', fontSize: '13px' }}>Correo</h6>
                <input className="form-control mb-3" type="email" placeholder="Correo"
                    value={registro.correo}
                    onChange={(e) => setRegistro({ ...registro, correo: e.target.value })}
                    style={inputStyle}
                />

                <h6 style={{ color: '#909090', marginBottom: '4px', fontSize: '13px' }}>Fecha de nacimiento</h6>
                <input className="form-control mb-3" type="date"
                    value={registro.fecha_nacimiento}
                    onChange={(e) => setRegistro({ ...registro, fecha_nacimiento: e.target.value })}
                    style={inputStyle}
                />

                <h6 style={{ color: '#909090', marginBottom: '4px', fontSize: '13px' }}>Contraseña</h6>
                <input className="form-control mb-3" type="password" placeholder="Contraseña"
                    value={registro.contraseña}
                    onChange={(e) => setRegistro({ ...registro, contraseña: e.target.value })}
                    style={inputStyle}
                />

                <h6 style={{ color: '#909090', marginBottom: '4px', fontSize: '13px' }}>Confirmar contraseña</h6>
                <input className="form-control mb-3" type="password" placeholder="Confirmar contraseña"
                    value={registro.con_contraseña}
                    onChange={(e) => setRegistro({ ...registro, con_contraseña: e.target.value })}
                    style={inputStyle}
                />

                <p style={{ color: '#b0b0b0', marginBottom: '1rem', fontSize: '14px' }}>¿Ya tienes una cuenta?
                    <a href="/login" style={{ color: '#9090c0', marginLeft: '6px' }}>Iniciar sesión</a>
                </p>

                <button onClick={handleRegistro} className="btn w-100"
                    style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', padding: '10px', borderRadius: '8px' }}>
                    Registrarse
                </button>
            </div>
        </div>
    )
}

export default Registro