import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Inicio.css';

function Inicio() {

    const navigate = useNavigate();

    const publicaciones = [
        {
            id: 1,
            usuario: "Nicolás Rodríguez",
            lugar: "Cementerio de Highgate - Londres, Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧",
            tiempo: "Hace 15 minutos",
            historia: "Mientras caminaba entre las tumbas escuché unos pasos detrás de mí. Al voltear no había absolutamente nadie. Mi celular comenzó a fallar y sentí un frío inexplicable.",
            imagen: "https://p16-cc-web-image-sign-sg.ibyteimg.com/tos-alisg-i-tnf8g33v4j-sg/2ce1ed5b3a0c4ac591a2d851400c8e70~tplv-tnf8g33v4j-ai-watermark-resize:480:480.image?rk3s=8880c87b&x-expires=1785101235&x-signature=u4N9eRTAR58Norad7LerckWlJQw%3D",
            likes: 38,
            comentarios: 12,
            vistas: 231
        },
        {
            id: 2,
            usuario: "Laura Gómez",
            lugar: "Mansion Winchester - California, Estados Unidos",
            tiempo: "Hace 1 hora",
            historia: "Entré con unos amigos a una casa abandonada. En una fotografía apareció una silueta que ninguno de nosotros vio en ese momento.",
            imagen: "https://p19-cc-web-image-sign-sg.ibyteimg.com/tos-alisg-i-tnf8g33v4j-sg/420a9caa47f441c9859a44327db8ea2f~tplv-tnf8g33v4j-ai-watermark-resize:480:480.image?rk3s=8880c87b&x-expires=1785107512&x-signature=OdwfPe851BdHGsR6V0Nc2rv9L1c%3D",
            likes: 81,
            comentarios: 27,
            vistas: 524
        },
        {
            id: 3,
            usuario: "Carlos Pérez",
            lugar: "Isla de Poveglia - Venecia, Italia",
            tiempo: "Hace 3 horas",
            historia: "Escuchamos voces susurrando nuestros nombres. Pensamos que era una broma, pero estábamos completamente solos.",
            imagen: "https://p16-cc-web-image-sign-sg.ibyteimg.com/tos-alisg-i-tnf8g33v4j-sg/829133a092aa4676bae0b7baaf7cd1b9~tplv-tnf8g33v4j-ai-watermark-resize:480:480.image?rk3s=8880c87b&x-expires=1785108023&x-signature=D9j%2FRsxZupfwfohqH2GBGe1VVXk%3D",
            likes: 59,
            comentarios: 16,
            vistas: 389
        },
    ];

    const [likes, setLikes] = useState({});
    const [mostrarComentarios, setMostrarComentarios] = useState({});
    const [comentarios, setComentarios] = useState({});
    const [nuevoComentario, setNuevoComentario] = useState({});
    const [mostrarReacciones, setMostrarReacciones] = useState({});

    return (

        <div className="inicio">

            {/* NAVBAR */}

            <nav className="navbar-ecos">

                <div className="logo">
                    👻 ECOS
                </div>

                <input
                    type="text"
                    placeholder="Que quieres encontrar..."
                />

                <div className="perfil-nav">

                    <button
                        onClick={() => navigate("/dashboard_usuario")}
                    >
                        Mi Perfil
                    </button>

                </div>

            </nav>

            <div className="contenido">

                {/* SIDEBAR */}

                <aside className="sidebar">

                    <h3>Explorar</h3>

                    <button>🏠 Inicio</button>

                    <button
                        onClick={() => navigate("/dashboard_usuario")}
                    >
                        👤 Mi Perfil
                    </button>

                    <button onClick={() => navigate("/dashboard_usuario")}>
                        📖 Historias
                    </button>

                    <button onClick={() => navigate("/dashboard_usuario")}>
                        ⭐ Favoritos
                    </button>

                    <button onClick={() => alert("Próximamente")}>
                    🛸 Avistamientos
                    </button>

                    <button onClick={() => alert("Esta sección estará disponible pronto")}>
                    👻 Fantasmas
                    </button>

                    <button onClick={() => alert("Esta sección estará disponible pronto")}>
                    🏚 Casas Embrujadas
                    </button>

                    <button onClick={() => alert("Esta sección estará disponible pronto")}>
                    🔮 Brujería
                    </button>

                    <button onClick={() => navigate("/dashboard_usuario")}>
                    ⚙ Configuración
                    </button>

                    <button className="cerrar"
                    onClick={() => {
                        localStorage.clear();
                        sessionStorage.clear();
                        navigate("/login");
                    }}
                    >
                        🚪 Cerrar sesión
                    </button>

                </aside>

                {/* FEED */}

                <main className="feed">

                    <div className="crear-publicacion">

                        <h3>
                            ¿Qué experiencia paranormal viviste?
                        </h3>

                        <textarea
                            placeholder="Comparte tu historia..."
                        />

                        <div className="opciones-publicar">

                            <button>📷 Crear publicacion</button>

                            <button>📍 Agregar Lugar</button>

                            <button className="publicar">
                                Publicar
                            </button>

                        </div>

                    </div>

                    {
                        publicaciones.map((post) => (

                            <div className="publicacion" key={post.id}>

                                <div className="encabezado-post">

                                    <div className="foto-perfil"></div>

                                    <div>

                                        <h4>{post.usuario}</h4>

                                        <span>{post.tiempo}</span>

                                        <p className="lugar">
                                            📍 {post.lugar}
                                        </p>

                                    </div>

                                </div>

                                <p className="historia">
                                    {post.historia}
                                </p>

                                <img
                                    src={post.imagen}
                                    alt="Historia paranormal"
                                />

                                <div className="acciones">
                                
                                    <button
                                        onClick={() =>
                                        setLikes({
                                        ...likes,
                                    [post.id]: !likes[post.id]
                                })
                            }
                            >
                {likes[post.id] ? "❤️" : "🤍"}{" "}
                {post.likes + (likes[post.id] ? 1 : 0)}
                                    </button>
                                    
                                    
                                    <button
                                        onClick={() =>
                                        setMostrarComentarios({
                                         ...mostrarComentarios,
                                        [post.id]: !mostrarComentarios[post.id]
                               
                                    })
                             }
                             >
                            💬 {post.comentarios + ((comentarios[post.id] || []).length)}
                            
                                    </button>
{mostrarComentarios[post.id] && (
    <div className="comentarios">

        {(comentarios[post.id] || []).map((c, i) => (
            <p key={i}>👤 {c}</p>
        ))}

        <input
            type="text"
            placeholder="Escribe un comentario..."
            value={nuevoComentario[post.id] || ""}
            onChange={(e) =>
                setNuevoComentario({
                    ...nuevoComentario,
                    [post.id]: e.target.placeholder
                })
            }
        />

        <button
            onClick={() => {
                if (!nuevoComentario[post.id]) return;

                setComentarios({
                    ...comentarios,
                    [post.id]: [
                        ...(comentarios[post.id] || []),
                        nuevoComentario[post.id]
                    ]
                });

                setNuevoComentario({
                    ...nuevoComentario,
                    [post.id]: ""
                });
            }}
        >
            Comentar
        </button>

    </div>
)}
                                    <button>
                                        👁️ {post.vistas}
                                    </button>

<div style={{ position: "relative" }}>

    <button
        onClick={() =>
            setMostrarReacciones({
                ...mostrarReacciones,
                [post.id]: !mostrarReacciones[post.id]
            })
        }
    >
        😀 Reaccionar
    </button>

    {mostrarReacciones[post.id] && (
        <div
            style={{
                position: "absolute",
                background: "#1b1b1b",
                padding: "10px",
                borderRadius: "10px",
                marginTop: "5px"
            }}
        >
            {["😂", "😱", "😍", "😢", "😡", "👻"].map((emoji) => (
                <button
                    key={emoji}
                    onClick={() => {
                        alert("Reaccionaste con " + emoji);

                        setMostrarReacciones({
                            ...mostrarReacciones,
                            [post.id]: false
                        });
                    }}
                >
                    {emoji}
                </button>
            ))}
        </div>
    )}

</div>

                                </div>

                            </div>

                        ))
                    }

                </main>

                {/* PANEL DERECHO */}

                <aside className="panel-derecho">

                    <div className="card-lateral">

                        <h3>🔥 Historias destacadas</h3>

                        <ul>

                            <li>👻 La niña del bosque</li>

                            <li>🏚 La casa del espejo</li>

                            <li>🛸 Luces sobre el cerro</li>

                            <li>🔮 El ritual prohibido</li>

                        </ul>

                    </div>

                    <div className="card-lateral">

                        <h3>📊 Comunidad</h3>

                        <p>👥 Usuarios activos</p>

                        <h2>2.351</h2>

                        <p>📖 Historias publicadas</p>

                        <h2>14.892</h2>

                    </div>

                    <div className="card-lateral">

                        <h3>💀 Categorías</h3>

                        <div className="categorias">

                            <span>👻 Fantasmas</span>

                            <span>🛸 Ovnis</span>

                            <span>🏚 Casas</span>

                            <span>😈 Demonios</span>

                            <span>🔮 Brujería</span>

                            <span>🌙 Leyendas</span>

                        </div>

                    </div>

                </aside>

            </div>

        </div>

    );

}

export default Inicio;