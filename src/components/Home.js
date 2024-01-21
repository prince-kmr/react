import { useState } from 'react';
import AddMovie from './AddMovie';
import AddTvSeries from './AddTvSeries';
import '../static/css/Style.css';

function Home() {
    const [rightComponent,setRightComponent] = useState(<AddMovie/>)

    var showTvSeriesComponent = ()=>{
        setRightComponent(<AddTvSeries/>)
    }

    return (
        <div className="row">
            <div className="col-3 box-height side-panel p-5">
                <nav class="nav flex-column">
                    <span class="nav-link mb-3" onClick={() => {setRightComponent(<AddMovie/>)}}>Add Movie</span>
                    <span class="nav-link mb-3" onClick={showTvSeriesComponent}>Add TV Series</span>
                    <span class="nav-link mb-3" onClick={() => {setRightComponent()}}>Show Movies</span>
                    <span class="nav-link mb-3" onClick={() => {setRightComponent()}}>Show TV Series</span>
                </nav>


            </div>
            <div className="col-9 box-height">
                    {rightComponent}
            </div>
        </div>
    )
}
export default Home;