export default function Banner() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://darshan.ac.in/U01/Slider/Slide_4.jpg?V=2.1.4" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://darshan.ac.in/U01/Slider/Slide_7.jpg?V=2.1.4" className="d-block w-100" alt="..."/>
                             </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}