import "../../assest/scss/PageNotFound.scss"
import pnf from "../../assest/images/pnf.jpg"
const PageNotFound = () => {
    return (
        <div className="pnf">
            <img src={pnf} alt="Page Not Found!" />
        </div>
    );
};

export default PageNotFound;