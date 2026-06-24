import { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Dashboard_admin.css";

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



    return (
        <div className="background vh-100">

            <div className="container-fluid h-100 text-center">
                <div className="row h-100">
                    <div className="col-md-3 col-lg-2 bg-dark p-4">
                        <h2 className="text-white mb-4 text-center">
                            ECOS 
                            <div> 
                            <br className="mt-3"/>
                            DASHBOARD ADMINISTRADOR
                            </div>
                        </h2>
                        <div className="nav flex-column">
                            <button
                                className="btn btn-outline-light mb-3"
                                onClick={() => setSeccion("usuarios")}
                            >
                                Usuarios
                            </button>

                            <button
                                className="btn btn-outline-light mb-3"
                                onClick={() => setSeccion("publicaciones")}
                            >
                                Publicaciones
                            </button>

                            <button
                                className="btn btn-outline-light mb-3"
                                onClick={() => setSeccion("reportes")}
                            >
                                Reportes
                            </button>

                            <button
                                className="btn btn-outline-light mb-3"
                                onClick={() => setSeccion("configuracion")}
                            >
                                Configuración
                            </button>

                             <button className="btn btn-danger mt-3" onClick={handleCerrarSesion}>
                                Cerrar sesión
                            </button>

                        </div>
                    </div>

                    <div className="col-md-9 col-lg-10 p-4 text-white">

                        <div className="bg-dark rounded-5 p-4 shadow">

                            {seccion === "usuarios" && (
                                <>
                                    <h2 className="text-white">
                                        Usuarios
                                    </h2>

                                    <p className="text-white">
                                        Aquí aparecerán los usuarios registrados.
                                    </p>

                                                    <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.username}</td>
                        </tr>
                    ))}
                </tbody>
                                </>
                            )}

                            {seccion === "publicaciones" && (
                                <>
                                    <h2 className="text-white">
                                        Publicaciones
                                    </h2>

                                    <p className="text-white">
                                        Aquí aparecerán las publicaciones.
                                    </p>
                                </>
                            )}

                            {seccion === "reportes" && (
                                <>
                                    <h2 className="text-white">
                                        Reportes
                                    </h2>

                                    <p className="text-white">
                                        Aquí aparecerán los reportes.
                                    </p>
                                </>
                            )}

                            {seccion === "configuracion" && (
                                <>
                                    <h2 className="text-white">
                                        Configuración
                                    </h2>

                                    <p className="text-white">
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






