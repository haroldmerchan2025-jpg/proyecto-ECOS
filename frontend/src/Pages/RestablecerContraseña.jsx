import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function RestablecerContrasena() {
    const { uid, token } = useParams()
    const navigate = useNavigate()

    const [contraseña, setContraseña] = useState("")
    const [confirmar, setConfirmar] = useState("")
    const [cargando, setCargando] = useState(false)

    const handleRestablecer = async () => {
        if (!contraseña || !confirmar) {
            alert("Completa ambos campos")
            return
        }
        if (contraseña !== confirmar) {
            alert("Las contraseñas no coinciden")
            return
        }

        setCargando(true)
        try {
            const response = await fetch("http://localhost:8000/api/usuarios/confirmar-recuperacion/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    uid,
                    token,
                    nueva_contraseña: contraseña
                })
            })

            const data = await response.json()

            if (response.ok) {
                alert("Contraseña actualizada correctamente, ya puedes iniciar sesión")
                navigate('/login')
            } else {
                alert(data.error || "El link no es válido o expiró")
            }
        } catch (error) {
            alert("Error al conectar con el servidor")
        } finally {
            setCargando(false)
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
                <h2 style={{ color: '#e0e0e0', fontSize: '20px', marginBottom: '1.5rem', fontWeight: '400' }}>Crea tu nueva contraseña</h2>

                <input className="form-control mb-3" type="password" placeholder="Nueva contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    style={inputStyle}
                />

                <input className="form-control mb-4" type="password" placeholder="Confirmar contraseña"
                    value={confirmar}
                    onChange={(e) => setConfirmar(e.target.value)}
                    style={inputStyle}
                />

                <button onClick={handleRestablecer} disabled={cargando} className="btn w-100"
                    style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', padding: '10px', borderRadius: '8px' }}>
                    {cargando ? 'Guardando...' : 'Restablecer contraseña'}
                </button>
            </div>
        </div>
    )
}

export default RestablecerContrasena