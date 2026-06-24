import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function Recuperar() {
    const [correo, setCorreo] = useState("")

    return (
        <div style={{ background: '#050505', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '2.5rem', width: '90%', maxWidth: '420px', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>

                <h1 style={{ color: '#8b8bbd', fontWeight: '500', marginBottom: '0.2rem', letterSpacing: '4px' }}>ECOS</h1>
                <h2 style={{ color: '#e0e0e0', fontSize: '20px', marginBottom: '1rem', fontWeight: '400' }}>Restablecer contraseña</h2>

                <p style={{ color: '#b0b0b0', marginBottom: '1.5rem', fontSize: '14px', lineHeight: '1.6' }}>
                    Escribe tu correo y te enviaremos instrucciones para recuperar tu contraseña.
                </p>

                <input className="form-control mb-4" type="email" placeholder="Correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    style={{ background: '#0d0d0d', border: '1px solid #2a2a2a', color: '#e0e0e0', borderRadius: '8px' }}
                />

                <button className="btn w-100 mb-3"
                    style={{ background: '#1a1a2e', color: '#d0d0d0', border: '1px solid #3a3a5a', padding: '10px', borderRadius: '8px' }}>
                    Enviar
                </button>

                <div className="text-center">
                    <a href="/login" style={{ color: '#9090c0', fontSize: '13px' }}>Volver a Inicio de sesión</a>
                </div>
            </div>
        </div>
    )
}

export default Recuperar