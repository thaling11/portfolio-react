import React from 'react';
import imageProject3 from '../../Assets/final-project-placeholder.jpg';
import imageHealthTracker from '../../Assets/health-tracker.jpg';
import imageAirQuality from '../../Assets/air-quality.jpg';
import codingQuiz from '../../Assets/coding-quiz.jpg';
import techBlog from '../../Assets/tech-blog.jpg';
import noteTaker from '../../Assets/note-taker.jpg';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div>
                <h3>My Works</h3>
            </div>
            <section id="card-wrapper">
            <div>
                <img src={imageProject3} class="project-pic" />
                <h5 className="project-header">Project 1</h5>
                <a className="links" target="blank">Github link</a>
                <a className="links" target="blank">Deployed page</a>
            </div>
            <div>
                <img src={imageHealthTracker} class="project-pic" />
                <h5 className="project-header">Health Tracker</h5>
                <a href="https://github.com/heintze11/health-tracker" target="blank" className="links">Github link</a>
                <a href="https://evening-reef-97935.herokuapp.com/" target="blank" className="links">Deployed link</a>
            </div>
            <div>
                <img src={imageAirQuality} class="project-pic" />
                <h5 className="project-header">Air Quality Comparison</h5>
                <a href="https://github.com/heintze11/health-tracker" target="blank" className="links">Github link</a>
                <a href="https://evening-reef-97935.herokuapp.com/" target="blank" className="links">Deployed link</a>
            </div>
            <div>
                <img src={codingQuiz} class="project-pic2" />
                <h5 className="project-header">Coding Quiz</h5>
                <a href="https://github.com/thaling11/javascript-coding-quiz" target="blank" className="links">Github link</a>
                <a href="https://thaling11.github.io/javascript-coding-quiz/#" target="blank" className="links">Deployed link</a>
            </div>
            <div>
                <img src={techBlog} class="project-pic2" />
                <h5 className="project-header">Tech Blog</h5>
                <a href="https://github.com/thaling11/MVC-tech-blog" target="blank" className="links">Github link</a>
                <a href="https://mvc-tech-blog-th.herokuapp.com/" target="blank" className="links">Deployed link</a>
            </div> 
            <div>
                <img src={noteTaker} class="project-pic2" />
                <h5 className="project-header">Note Taker</h5>
                <a href="https://github.com/thaling11/note-taker" target="blank" className="links">Github link</a>
                <a href="https://note-taker-th.herokuapp.com/" target="blank" className="links">Deployed link</a>
            </div>
            </section>
        </section>
    )
}

export default Portfolio;