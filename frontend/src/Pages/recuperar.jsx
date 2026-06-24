import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Recuperar.css'


function Recuperar() {

    const [Recuperar, setRecuperar] = useState({

        correo: "",
    })

    return (


        <div className="background_recuperar vh-100 d-flex justify-content-center align-items-center">

            <div className="p-5 bg-dark caja_recuperar rounded-5 ">

                <div >
                    <h2 className="text-white mb-5">Restablecer contraseña</h2>

                    <p className="text-start text-white">Escribe tu correo en este espacio para recuperar tu contraseña </p>

                </div >

                <input className="form-control"
                    type="text"
                    placeholder="Correo"
                    value={Recuperar.correo}
                    onChange={(e) => setRecuperar({
                        ...Recuperar,
                        correo: e.target.value
                    })}
                />

                <button className="mt-4 background_recuperar text-white btn">Enviar</button>

                <br/>

                <a className="" 
                href="/inicio_de_sesion">Volver a Inicio de sesion</a>

            </div>
        </div>
    )


}

export default Recuperar