import { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Registro.css'

function Registro() {
    const navigate = useNavigate()
    const [mostrarContraseña, setMostrarContraseña] = useState(false)
    const [mostrarConfirmarContraseña, setMostrarConfirmarContraseña] = useState(false)
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [registro, setRegistro] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        fecha_nacimiento: "",
        contraseña: "",
        con_contraseña: ""
    })

    const handleRegistro = async () => {
        if (!aceptaTerminos) {
            alert("Debes aceptar los términos y condiciones.");
            return;
        }
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
                navigate('/inicio')
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
        <div style={{ 
            background: '#050505', 
            minHeight: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' }}>

            <div style={{ 
                background: '#0a0a0a', 
                border: '1px solid #1a1a1a', 
                borderRadius: '16px', 
                padding: '2.5rem', 
                width: '90%', 
                maxWidth: '500px', 
                boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>

                <h1 style={{ 
                    color: '#8b8bbd', 
                    fontWeight: '500', 
                    marginBottom: '0.2rem', 
                    letterSpacing: '4px' }}>ECOS</h1>
                    
                <h2 style={{ 
                    color: '#e0e0e0', 
                    fontSize: '20px', 
                    marginBottom: '2rem', 
                    fontWeight: '400' }}>Registro</h2>

                <h3 style={{ 
                    color: '#909090', 
                    marginBottom: '4px', 
                    fontSize: '13px' }}>Nombres</h3>
                    
                <input 
                className="form-control mb-3" 
                type="text" placeholder="Nombres"
                    value={registro.nombre}
                    onChange={(e) => setRegistro({ ...registro, nombre: e.target.value })}
                    style={inputStyle}
                />

                <h4 style={{ 
                    color: '#909090', 
                    marginBottom: '4px', 
                    fontSize: '13px' }}>Apellidos</h4>

                <input 
                className="form-control mb-3" 
                type="text" placeholder="Apellidos"
                    value={registro.apellido}
                    onChange={(e) => setRegistro({ ...registro, apellido: e.target.value })}
                    style={inputStyle}
                />

                <h5 style={{ 
                    color: '#909090', 
                    marginBottom: '4px', 
                    fontSize: '13px' }}>Correo</h5>


                <input 
                className="form-control mb-3" 
                type="email" placeholder="Correo"
                    value={registro.correo}
                    onChange={(e) => setRegistro({ ...registro, correo: e.target.value })}
                    style={inputStyle}
                />

                <h6 style={{
    color: '#909090',
    marginBottom: '4px',
    fontSize: '13px'
}}>
    Fecha de nacimiento
</h6>

<input
    className="form-control mb-3"
    type="date"
    value={registro.fecha_nacimiento}
    onChange={(e) => setRegistro({ ...registro, fecha_nacimiento: e.target.value })}
    style={inputStyle}
/>

<h6 style={{
    color: '#909090',
    marginBottom: '4px',
    fontSize: '13px'
}}>
    Contraseña
</h6>

<div className="password-container">

    <input
        className="form-control mb-3"
        type={mostrarContraseña ? "text" : "password"}
        placeholder="Contraseña"
        value={registro.contraseña}
        onChange={(e) => setRegistro({ ...registro, contraseña: e.target.value })}
        style={inputStyle}
    />

    <span
        className="password-toggle"
        onClick={() => setMostrarContraseña(!mostrarContraseña)}
    >
        👁️
    </span>

</div>

<h6 style={{
    color: '#909090',
    marginBottom: '4px',
    fontSize: '13px'
}}>
    Confirmar contraseña
</h6>

<div className="password-container">

    <input
        className="form-control mb-3"
        type={mostrarConfirmarContraseña ? "text" : "password"}
        placeholder="Confirmar contraseña"
        value={registro.con_contraseña}
        onChange={(e) => setRegistro({ ...registro, con_contraseña: e.target.value })}
        style={inputStyle}
    />

    <span
        className="password-toggle"
        onClick={() => setMostrarConfirmarContraseña(!mostrarConfirmarContraseña)}
    >
        👁️
    </span>

</div>

<p style={{
    color: '#312c2c',
    marginBottom: '1rem',
    fontSize: '14px'
}}>
    ¿Ya tienes una cuenta?
    <a
        href="/login"
        style={{
            color: '#9090c0',
            marginLeft: '6px'
        }}
    >
        Iniciar sesión
    </a>
</p>

<div
    style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "15px",
        color: "#d0d0d0",
        fontSize: "14px"
    }}
>
    <input
        type="checkbox"
        checked={aceptaTerminos}
        onChange={(e) => setAceptaTerminos(e.target.checked)}
    />

    <span>
        Acepto los{" "}
        <button
            type="button"
            onClick={() => alert("Aquí van los términos y condiciones de ECOS.")}
            style={{
                background: "none",
                border: "none",
                color: "#9090c0",
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline"
            }}
        >
            Términos y Condiciones
        </button>
    </span>
</div>


<button
    onClick={handleRegistro}
    className="btn w-100"
    style={{
        background: '#1a1a2e',
        color: '#d0d0d0',
        border: '1px solid #3a3a5a',
        padding: '10px',
        borderRadius: '8px'
    }}
>
    Registrarse
</button>
            </div>
        </div>
    )
}

export default Registro