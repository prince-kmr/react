import { useState } from 'react';
import '../static/css/Style.css';

function AddTvSeries(){ 

    const [tvSeriesName,setTvSeriesName] = useState("")
    const [actors,setActors] = useState("");
    const [episodes,setEpisodes] = useState("");
    const [releaseDate,setReleaseDate] = useState("");
  
    return(
        <div className="row justify-content-center box-height">
            <div className="col-6 align-self-center shadow-lg">
                <form>
                    <div className="m-5">
                        <div className="mb-3">
                            <label htmlFor="tvSeriesName" className="text-light">TV Series Name</label>
                            <input type="text" className="form-control" name="tvSeriesName" placeholder="Enter TV Series Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="actors" className="text-light">Actors</label>
                            <input type="text" className="form-control" name="actors" placeholder="Akshay Kumar,Kajol"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="episodes" className="text-light">Episodes</label>
                            <input type="text" className="form-control" name="episodes" placeholder="Enter number of episodes"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="releaseDate" className="text-light">Release Date</label>
                            <input type="date" className="form-control" name="releaseDate" />
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary">Save TV Series</button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>
    )
}

export default AddTvSeries;