import { useState } from "react"

const AddMovie = () => {
    const [formDetails, setFormDetails] = useState()

    const submitHandle = (e) => {
        e.preventdefault()
        console.log(formDetails)
    }

    return (
        <div className="form-container">

            <form onSubmit={submitHandle}>
                <div className="input-feild">
                    <label>
                        Title
                    </label>
                    <input
                        type="text"
                        value={formDetails}
                        onChange={setFormDetails((event) => event.target.value)}
                    />
                </div>

                <div className="input-feild">
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                        value={formDetails}
                        onChange={setFormDetails((event) => event.target.value)}
                    />
                </div>

                <div className="options">
                    <label>
                        Role
                    </label>
                    <select
                        onChange={setFormDetails((event) => event.target.value)}
                    >
                        <option value={formDetails}>Director</option>
                        <option value={formDetails}>Actor</option>
                        <option value={formDetails}>Producer</option>
                    </select>
                </div>

            </form>

        </div>
    )
}

export default AddMovie