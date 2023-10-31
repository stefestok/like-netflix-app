import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return(
        <button className="all-delete-button" onClick={props.deleteMovies}>Vymazať všetko</button>
    )
}

export default AllDeleteButton