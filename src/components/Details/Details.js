import "../../assest/scss/Details.scss"

const Details = (props) => {
    const  {data}  = props
  
    console.log("props--->",props.title)

   
    return (
        // <div className="movie-section">
        //     {/* {Object.keys(data).length === 0 ? (
        //         <div>...Loading</div>

        //     ) : ( */}
        <>
            <div className="section-left">
                <div className="movie-title">{props?.data?.title}</div>
                 <div className="movie-rating">
                    <span>
                        IMDB Rating <i className="fa fa-star"></i> : {props?.data?.rating}
                    </span>
                    <span>
                        Year <i className="fa fa-calendar"></i> : {props?.data?.createdAt}
                    </span>
                </div>
                <div className="movie-plot">{props?.data?.description}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{"email"}</span>
                    </div>
                    <div>
                        <span>Sub Titles</span>
                        <span>{props?.data?.sub_titles}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{props?.data?.languages}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{props?.data?.generes}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={props?.data?.cover_photo} alt={props?.data?.title} /> 
            </div>

        </>


    )
}

export default Details