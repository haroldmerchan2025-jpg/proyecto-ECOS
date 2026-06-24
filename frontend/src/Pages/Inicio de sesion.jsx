import { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function Inicio_sesion() {
    const [sesion, setsesion] = useState({ correo: "", contraseña: "" })
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/usuarios/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: sesion.correo, password: sesion.contraseña })
            })
            const data = await response.json()
            if (response.ok) {
                localStorage.setItem('usuario', JSON.stringify(data))
                if (data.is_staff || data.is_superuser) {
                    navigate('/dashboard_admin')
                } else {
                    navigate('/dashboard_usuario')
                }
            } else {
                alert("Credenciales incorrectas")
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
            <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '2.5rem', width: '90%', maxWidth: '420px', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>

                <h1 style={{ color: '#8b8bbd', fontWeight: '500', marginBottom: '0.2rem', letterSpacing: '4px' }}>ECOS</h1>
                <h2 style={{ color: '#e0e0e0', fontSize: '20px', marginBottom: '2rem', fontWeight: '400' }}>Inicio de sesión</h2>

                <input className="form-control mb-3" type="text" placeholder="Correo"
                    value={sesion.correo}
                    onChange={(e) => setsesion({ ...sesion, correo: e.target.value })}
                    style={inputStyle}
                />

                <input className="form-control mb-2" type="password" placeholder="Contraseña"
                    value={sesion.contraseña}
                    onChange={(e) => setsesion({ ...sesion, contraseña: e.target.value })}
                    style={inputStyle}
                />

                <div className="text-end mb-3">
                    <a href="/recuperar" style={{ color: '#9090c0', fontSize: '13px' }}>Recuperar contraseña</a>
                </div>

                <button onClick={handleLogin} className="btn w-100 mb-3"
                    style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', padding: '10px', borderRadius: '8px' }}>
                    Iniciar sesión
                </button>

                <p style={{ color: '#b0b0b0', margin: 0, fontSize: '14px' }}>¿No tienes cuenta?
                    <a href="/registro" style={{ color: '#9090c0', marginLeft: '6px' }}>Crear cuenta</a>
                </p>
            </div>
        </div>
    )
}

export default Inicio_sesion