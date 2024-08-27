
import image1 from "../media/ChisiamoPageImage1.jpg"
import image2 from "../media/ChisiamoPageImage2.jpeg"
import image3 from "../media/ChisiamoPageImage3.jpg"
import image4 from "../media/ChisiamoPageImage4.jpeg"

export default function GalleryPage(){

    return (

    <>

        <div className="container">
            <div className="row pb-5">
                <div className="col-12 py-3">
                    <h2 className="text-center my-5 py-2 fw-bold text1 font1">LA NOSTRA GALLERY</h2>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src={image1}
                    className="w-100 rounded-0 mb-4"
                    alt="Boat on Calm Water"
                    />

                    <img
                    src={image3}
                    className="w-100 rounded-0 mb-4"
                    alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src={image4}
                    className="w-100 rounded-0 mb-4"
                    alt="Mountains in the Clouds"
                    />

                    <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                    className="w-100 rounded-0 mb-4"
                    alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src={image2}
                    className="w-100 rounded-0 mb-4"
                    alt="Waves at Sea"
                    />

                    <img
                    src={image3}
                    className="w-100 rounded-0 mb-4"
                    alt="Yosemite National Park"
                    />
                </div>
            </div>
        </div>




    </>
    )

}
