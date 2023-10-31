import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
    return(
        <button onClick={props.reloadMovies} className="reload-button">Pridať všetko</button>
    )
}

export default ReloadMovieButton