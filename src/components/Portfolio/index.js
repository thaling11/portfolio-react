import React from 'react';
import imageProject3 from '../../Assets/final-project-placeholder.jpg';
import imageHealthTracker from '../../Assets/health-tracker.jpg';
import imageAirQuality from '../../Assets/air-quality.jpg';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div>
                <h3>My Works</h3>
            </div>
            <section id="card-wrapper">
            <div>
                <h5 class="project-header">Project 1</h5>
                <img src={imageProject3} class="project-pic" />
                <a class="links" target="blank">Github link</a>
                <a class="links" target="blank">Deployed page</a>
            </div>
            <div>
                <h5 class="project-header">Health Tracker</h5>
                <img src={imageHealthTracker} class="project-pic" />
                <a href="https://github.com/heintze11/health-tracker" target="blank" class="links">Github link</a>
                <a href="https://evening-reef-97935.herokuapp.com/" target="blank" class="links">Deployed link</a>
            </div>
            <div>
                <h5 class="project-header">Air Quality Comparison</h5>
                <img src={imageAirQuality} class="project-pic" />
                <a href="https://github.com/heintze11/health-tracker" target="blank" class="links">Github link</a>
                <a href="https://evening-reef-97935.herokuapp.com/" target="blank" class="links">Deployed link</a>
            </div>
            </section>
        </section>
    )
}



export default Portfolio;