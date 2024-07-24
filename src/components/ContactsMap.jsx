import "./ContactsMap.css"

export default function ContactsMap(){

    return(
        <>
        <div className="container pt-5" >
            <div className="row">
                <div className="col-lg-4 text3 bg-info">
                    <h3 className="mb-4 text1 fw-bold">CONTATTI</h3>
                    <div className="d-flex flex-column mb-2">
                        <p className="h4 text1">Telefono</p>
                        <p className=" fs-4">123456789</p>
                    </div>
                    <div className="d-flex flex-column mb-2">
                        <p className="h4 text1">Whatsapp</p>
                        <p className=" fs-4">123456789</p>
                    </div>
                    <div className="d-flex flex-column mb-2">
                        <p className="h4 text1">Mail</p>
                        <p className=" fs-4">mail@mail.com</p>
                    </div>
                </div>
                <div className="col-lg-8 bg-danger">
                    <h3 className="mb-4 text1 fw-bold">DOVE SIAMO</h3>
                    <div className="pe-lg-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.4938900326804!2d16.15151871454879!3d41.37461570703148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13382025fbb79855%3A0xb7749c4547df0136!2sVia%20Principe%20Amedeo%2C%201%2C%2076016%20Margherita%20di%20Savoia%20BT!5e0!3m2!1sen!2sit!4v1721811894757!5m2!1sen!2sit" width="856" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}