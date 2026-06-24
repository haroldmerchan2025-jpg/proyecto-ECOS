import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Inicio de sesion.css'
import { useNavigate } from 'react-router-dom'


function Inicio_sesion() {

    const [sesion, setsesion] = useState({
        correo: "",
        contraseña: ""
    })

    const navigate = useNavigate()

const handleLogin = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/usuarios/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: sesion.correo,
                password: sesion.contraseña
            })
        })

        const data = await response.json()
        console.log(data)

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
        console.error(error)
        alert("Error al conectar con el servidor")
    }
}
    return (
        <div className="background_ini vh-100 d-flex justify-content-center align-items-center">

            <div className="bg-dark p-5 rounded-5 shadow caja_ini ">

                <div className="mb-5">

                    <h1 className="text-white">ECOS</h1>

                    <h2 className="text-white">Inicio de sesion</h2>
                </div>
                <div className=" text-end">

                    <input className="mb-3 form-control"
                        type="text"
                        placeholder="Correo"
                        value={sesion.correo}
                        onChange={(e) => setsesion({
                            ...sesion,
                            correo: e.target.value
                        })}
                    />

                    <input className="form-control"
                        type="password"
                        placeholder="Contraseña"
                        value={sesion.contraseña}
                        onChange={(e) => setsesion({
                            ...sesion,
                            contraseña: e.target.value
                        })}
                    />
                    <a className="text-end " href="/recuperar_contraseña" >Recuperar contraseña</a>

                </div>

                <button onClick={handleLogin} className="mt-4 btn text-white bg-purple background">Iniciar sesion</button>

                <p className="text-white mt-2">¿No tienes cuenta?
                    <a className="ms-2" href="/registro">Crear cuenta</a>
                </p>
            </div>

        </div>
    )
}

export default Inicio_sesion