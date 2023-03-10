import styles from "./QueHacemos.module.css"
import { useSelector } from 'react-redux'
import Image from "next/image"

const QueHacemos = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <div className={styles.containerQueHacemos}>
            <h3>{isTranslate?"What we do?":"Qué hacemos?"}</h3>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.icono}>
                        <Image
                        src={"/gestion-de-proyectos.png"}
                        width={50}
                        height={50}
                        alt="gestion de proyectos"
                        />
                    </div>
                    <strong>{isTranslate? "MANAGEMENT AND ADMINISTRATION" : "GESTIÓN Y ADMINISTRACIÓN"}</strong>
                    <ul>
                        <li>{isTranslate? "We manage your properties and/or experiences." :"Gestionamos tus propiedades y/o experiencias."}</li>
                        <li>{isTranslate? "We create attractive publications to attract tourists' attention." :"Creamos publicaciones atractivas para llamar la atención de los turistas."}</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <div className={styles.icono}>
                        <Image
                        src={"/signo-de-dolar.png"}
                        width={50}
                        height={50}
                        alt="dinero"
                        />
                    </div>
                    <strong>{isTranslate? "CHARGES" : "COBROS"}</strong>
                    <ul>
                        <li>{isTranslate? "The money generated from reservations of accommodations and tourist experiences will be automatically sent to your selected payment method." : "El dinero generado gracias a las reservaciones de alojamientos y experiencias turísticas sera enviado automáticamente a tu método de cobro seleccionado."}</li>
                        {/* <li>{isTranslate? "We establish your property on all platforms." : "Establecemos tu propiedad en todas las plataformas."}</li>
                        <li>{isTranslate ? "We apply a range of prices to suit the different times of the year." : "Aplicamos un rango de precios que se ajusten a los distintos momentos del año."}</li> */}
                    </ul>
                </div>
                <div className={styles.card}>
                    <div className={styles.icono}>
                        <Image
                        src={"/proteger.png"}
                        width={50}
                        height={50}
                        alt="proteccion"
                        />
                    </div>
                    <strong>{isTranslate? "SECURITY AND ANALYSIS":"SEGURIDAD Y ANÁLISIS"}</strong>
                    <ul>
                        <li>{isTranslate?"We answer the questions of potential guests and analyze their profile to consider their suitability according to the standards set by the owner.":"Respondemos las dudas de los potenciales huéspedes y analizamos su perfil para considerar si son aptos según las normas puestas por el propietario"}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default QueHacemos