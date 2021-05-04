import React from 'react';
import './CompanyProfile.css';
import OverAll from './OverAll/OverAll';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Charts from '../charts/Charts';

const CompanyProfile = ({
    companyName,
    about,
    location,
    hQuarters,
    img,
    Salary,
    workEnv,
    jobSecurity,
    worklife,
    founded,
    revenue,
    size,
    reviews,
    benefits,
    mission,
    another,
    companeEmail,
    website,
    type
}) => {
    return (
        <div className="companyOverviewContainer">
            <div className="firstOverviewContainer">
                <div className="firstOverview">
                    <div className="companyBackLogo">
                        {/* <img src={Logo} alt="logo" className="logoBackground" /> */}
                    </div>
                    <div className="companyLogoContainer">
                        <img src={img} alt="company Logo" className="companyLogo" />
                    </div>
                </div>
                {/* <div>
                    <div className="companyOverAll">
                        <OverAll number="44" name="overview" />
                        <OverAll number="66" name="Reviews" />
                        <OverAll number="164" name="Jobs" />
                        <OverAll number="94" name="Salaries" />
                        <OverAll number="4" name="Interviews" />
                        <OverAll number="4" name="Benefits" />
                        <OverAll number="2" name="Photos" />
                    </div>
                    <div className="followNAdd">
                        <button className="followBtn">Follow</button>
                        <button className="addReviewBtn">Add a Review</button>
                    </div>
                </div> */}
            </div>
            <div className="emptyDiv">
                <button className="viewJobs">View Jobs at {companyName}</button>
            </div>
            <div className="companyDetailsContainer">
                <ul className="companyDetails">
                        <li className="detail">
                            <label className="companyN">{companyName} Overview</label>
                            <div  className="overviewDetail toElse">Work Here?Get a Free Employer Account</div>
                        </li>
                        <li className="detail">
                        <label>Website:</label>
                        <a href={website} className="overviewDetail toElse"> {website} </a>
                        </li>
                        
                    <li className="detail">
                        <label>Headquarters:</label>
                        <div className="overviewDetail"> {hQuarters} </div>
                    </li>
                    <li className="detail">
                        <label>Size:</label>
                        <div className="overviewDetail">  {size} </div>
                    </li>
                    <li className="detail">
                        <label>Type:</label>
                        <div className="overviewDetail"> {type} </div>
                    </li>
                    <li className="detail">
                        <label>Founded:</label>
                        <div className="overviewDetail"> {founded} </div>
                    </li>
                    <li className="detail">
                        <label>Industry:</label>
                        <div className="overviewDetail"> {companyName} </div>
                    </li>
                    <li className="detail">
                        <label>Revenue:</label>
                        <div className="overviewDetail"> {!revenue ? 'Unknown/Not applicable' : revenue} </div>
                    </li>
                </ul>
                <div>
                    <p> {about} </p><br/>
                    <p>Mission: {mission}</p>
                </div>
            </div>
            <div className="jobRole">
                <h2>Job Role Insight</h2>
                <Charts />
                <div>
                    <h3>Job : product manager</h3>
                    <p>minimum number of working years: 2 years</p>
                    <p>maximum number of working years: 10 years</p>
                    <p><strong>benefits:</strong><br/> {benefits}</p>
                    <h3>Work life:</h3>
                    <ul>
                        {
                            worklife.map((work, index) => {
                                return <li key={index}> {work} </li>
                            })
                        }
                    </ul>
                    <div>
                        <h3>work Environments:</h3>
                        <img src={img} className="workEnvImg" alt={companyName}/>
                    </div>
                    
                    <h3>Reviews</h3>
                        <ul>
                            {
                                reviews.map((review, index) => {
                                   return <li key={index}> {review} </li>
                                })
                            }
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile;
