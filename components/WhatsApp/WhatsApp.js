import Image from "next/image"

const WhatsApp = () => {
    return(
        <div style={{
            position: "fixed",
            zIndex: 150,
            bottom: 0,
            right: 0,
            cursor: "pointer",
            marginRight: 10,
            marginBottom: 10
        }}>
            <a target={"_blank"} href="https://wa.me/5492944238597?text=Hola,%20Me%20gustaria%20mas%20informacion">
                <Image
                src={"/wp2.png"}
                width={65}
                height={65}
                alt="WhatsApp"
                />
            </a>
        </div>
    )
}

export default WhatsApp