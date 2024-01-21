import '../static/css/Style.css';
import {useState} from 'react';


function AddMovie(){

    const [movieName,setMovieName] = useState("");
    const [actors,setActors] = useState("");
    const [releaseDate,setReleaseDate] = useState("");
    const [msg,setMsg] = useState("")

    var handleSubmit = (event) =>{
        event.preventDefault(); //Stop the form default action that is to submit the data and reload the page
        var movie = { //creating JS object of movie data
            movieName : event.target.movieName.value,
            actors : event.target.actors.value,
            releaseDate : event.target.releaseDate.value
        }
        console.log(movie);
        console.log(JSON.stringify(movie))
        
        //submitting data
        fetch("/addmovie",{
            method:"POST",
            headers : {'Content-Type' : "application/json"},
            body : JSON.stringify(movie)
        })
        .then(res => res.json())
        .then(data => setMsg(data.msg));
    }
    
    return(
        <div className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="m-5">
                    <div className="mb-3 text-center" ><i><span className="text-success msg">{msg ? <i class="bi bi-check2-circle"></i> : ""}{" "+msg}</span></i></div>
                        <div className="mb-3">
                            <label htmlFor="movieName" className="text-light">Movie Name</label>
                            <input type="text" className="form-control" name="movieName" placeholder="Enter Movie Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="actors" className="text-light">Actors</label>
                            <input type="text" className="form-control" name="actors" placeholder="Akshay Kumar,Kajol"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="releaseDate" className="text-light">Release Date</label>
                            <input type="date" className="form-control" name="releaseDate" />
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary">Save Movie</button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>
    )
}

export default AddMovie;