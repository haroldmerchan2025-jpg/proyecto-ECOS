import { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Registro.css'

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
                headers: {
                    "Content-Type": "application/json"
                },
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
                navigate('/dashboard_usuario')
            } else {
                alert(JSON.stringify(data))
            }
        } catch (error) {
            alert("Error al conectar con el servidor")
        }
    }

    return (
        <div className="background d-flex vh-100 justify-content-center align-items-center">

            <div className="bg-dark p-5 rounded-5 shadow caja">
                <div className="mb-5">

                    <h1 className="text-white " >ECOS</h1>

                    <h2 className="text-white">Registro</h2>
                </div>

                <div className=" d-flex flex-column text-start ">

                    <h6 className="text-white">Nombres completos</h6>
                    <input className="form-control mb-3"
                        type="text"
                        placeholder="Nombres"
                        value={registro.nombre}
                        onChange={(e) => setRegistro({
                            ...registro,
                            nombre: e.target.value
                        })}
                    />
                    <h6 className="text-white text-start">Apellidos</h6>
                    <input className="form-control mb-3 "
                        type="text"
                        placeholder="Apellidos"
                        value={registro.apellido}
                        onChange={(e) => setRegistro({
                            ...registro,
                            apellido: e.target.value
                        })}
                    />
                    <h6 className="text-white text-start">Correo</h6>
                    <input className="form-control mb-3 "
                        type="email"
                        placeholder="Correo"
                        value={registro.correo}
                        onChange={(e) => setRegistro({
                            ...registro,
                            correo: e.target.value
                        })}
                    />
                    <h6 className="text-white text-start">Fecha de nacimiento</h6>
                    <input className="form-control mb-3 "
                        type="date"
                        placeholder="Fecha de nacimiento"
                        value={registro.fecha_nacimiento}
                        onChange={(e) => setRegistro({
                            ...registro,
                            fecha_nacimiento: e.target.value
                        })}
                    />
                    <h6 className="text-start text-white">Contraseña</h6>
                    <input className="form-control mb-3"
                        type="password"
                        placeholder="Contraseña"
                        value={registro.contraseña}
                        onChange={(e) => setRegistro({
                            ...registro,
                            contraseña: e.target.value
                        })}
                    />
                    <h6 className="text-white text-start">Confirmar contraseña</h6>
                    <input className="form-control mb-3"
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={registro.con_contraseña}
                        onChange={(e) => setRegistro({
                            ...registro,
                            con_contraseña: e.target.value
                        })}
                    />
                    <p className="text-white ms-2">¿Ya tienes una cuenta?
                        <a href="/login" className=" ms-2">Iniciar sesion</a>
                    </p>

                    <button onClick={handleRegistro} className="btn border-white text-white mt-2 background">Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default Registro