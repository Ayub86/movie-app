import "../../assest/scss/Details.scss"

const Details = (props) => {
    const { data } = props
    console.log("props--->", props)

    let clone = {}
    for (let key in data) {
        clone[key] = data[key];
    }

    return (
        // <div className="movie-section">
        //     {/* {Object.keys(data).length === 0 ? (
        //         <div>...Loading</div>

        //     ) : ( */}
        <>
            <div className="section-left">
                <div className="movie-title">{clone.title}</div>
                <div className="movie-rating">
                    <span>
                        IMDB Rating <i className="fa fa-star"></i> : {clone.rating}
                    </span>
                    <span>
                        Year <i className="fa fa-calendar"></i> : {clone.createdAt}
                    </span>
                </div>
                <div className="movie-plot">{clone.description}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{"email"}</span>
                    </div>
                    <div>
                        <span>Sub Titles</span>
                        <span>{clone.sub_titles}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{clone.languages}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{clone.generes}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={clone.cover_photo} alt={clone.title} />
            </div>

        </>


    )
}

export default Details