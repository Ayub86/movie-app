import "../../assest/scss/Details.scss"

const Details = (props) => {
    // const  {data}  = props
    // console.log("data000",data);
    // const title=props.title
    console.log("props--->",props)

    // const { title, sub_titles, cover_photo, description, generes, languages, rating, createdAt } = props
    // console.log(title);
    //  console.log(props.data.title,"title");
    return (
        // <div className="movie-section">
        //     {/* {Object.keys(data).length === 0 ? (
        //         <div>...Loading</div>

        //     ) : ( */}
        <>
            <div className="section-left">
                <div className="movie-title">{props.title}</div>
                {/* <div className="movie-rating">
                    <span>
                        IMDB Rating <i className="fa fa-star"></i> : {rating}
                    </span>
                    <span>
                        Year <i className="fa fa-calendar"></i> : {createdAt}
                    </span>
                </div>
                <div className="movie-plot">{description}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{"email"}</span>
                    </div>
                    <div>
                        <span>Sub Titles</span>
                        <span>{sub_titles}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{languages}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{generes}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={cover_photo} alt={title} /> */}
            </div>

        </>


    )
}

export default Details