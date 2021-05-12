import React, { useRef, useState, useEffect } from 'react';
import './LandingPage.css';
import db from '../../firebase';

import { useStateValue } from '../../AuthContext';
import Stats from './Stats/Stats';
import EmployersAds from './EmployersAds/EmployersAds';
import Logo from '../../assets/logo.png';
import AboutUsImg from '../../assets/browse.jpg';

import { Link, useHistory } from 'react-router-dom';
import Mark from '@material-ui/icons/VerifiedUserOutlined';
import CompanyProfile from '../CompanyProfile/CompanyProfile';


const LandingPage = () => {
    const [posts, setPosts] = useState([]);
  const [company, setCompany] = useState("");
  const [said, setSaid] = useState([]);
  const [job, setJob] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [location, setLocation] = useState("");
  const [selectJob, setSelectJob] = useState('');
  const [{searchJob}, dispatch] = useStateValue();
  const history = useHistory();

  let verRole = false;
  useEffect(() => {
    db.collection("companies").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  let display = posts.map((post) => post.companyName);
  let displayRoles = posts.map((post) => post.Roles);
    // let displayLocation = posts.map((post) => post.location);

  let jobResults = [];
  let another = [];

  //list of job options
  function see() {
    for (let i = 0; i < displayRoles.length; i++) {
        let roles = posts[i].Roles;
        // console.log(roles);

        Object.values(roles).map(item => {
          if(item.role === selectJob && company.toLowerCase() === posts[i].companyName.toLowerCase()) {
            another.push({'role': item.role, 'maxYears': item.maxYears, 'minYears': item.minYears, 'benefits':item.benefits});
          }
         return jobResults.push(item.role);
        })
        if(selectJob === jobResults[i]) {
          verRole = true;
          break;
      } else {
         verRole = false;
      }
    }
  }
  see();

let uniqueArray = jobResults.filter(function(item, pos) {
    return jobResults.indexOf(item) === pos;
})

//company search filter
  const handleChange = (e) => {
    const value = e.target.value;
    value.toLowerCase();
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = display.sort().filter((v) => regex.test(v));
    }
    setSaid(() => suggestions);
    setCompany(value);
  };


  const handleLocation = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = display.sort().filter((v) => regex.test(v));
    }
    setSaid(() => suggestions);
    setLocation(value);
  };

  const handleRole = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = display.sort().filter((v) => regex.test(v));
    }
    setSaid(() => suggestions);
    setJob(value);
  };

  const Search = () => {
    if(company !== "" &&
      selectJob !== "" &&
      location !== ""
      ) {
        setShowResult(true);
            dispatch({
              type:"SEARCHED_JOB",
              job: {
                actualCompany: company,
                actualLocation: location,
                actualJob: selectJob
              }
            })
            history.push('/searchjob');
    }else {
      //show error message
    }
    
  };

  console.log(searchJob);

  const suggestionSelected = (name) => {
    setCompany(name);
    setSaid([]);
  };

  const handleJobSelected = (e) => {
    let title = e.target.value;
    setSelectJob(title);
  }

  const renderSuggestions = () => {
    if (said.length === 0) {
      return null;
    }
    return (
      <ul>
        {said.map((item, index) => (
          <li onClick={() => suggestionSelected(item)} key={index}>
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    );
  };

    return (
        <div>
            <div className="firstPageContainer">
            <nav className="searchAreaNav">
                <div className="logo">LOGO</div>
                <ul className="navBarOptions">
                    <li><Link className="navBarOp" to="#">JOBS</Link></li>
                    <li><Link className="navBarOp" to="#">POST A JOB</Link></li>
                    <li><Link className="navBarOp" to="#">ADD RESUME</Link></li>
                    <li><Link className="navBarOp" to="#">LOGIN</Link></li>
                    <li><Link to="/tosignup" className="navBarOp signupLink">SIGN UP</Link></li>
                </ul>
            </nav>
            <div className="mainPageText">
                <h1>All jobs in one place</h1>
                <p>Finding your new job just got easier</p>
            </div>
            <div className='searchContainer'>
                <label className="searchLabel">Search:</label>
                <div className="searchInputs">
                    <input 
                        type='text'
                        className="searchInput"
                        onChange={handleChange}
                        value={company}
                        placeholder="companies" />
                    <select 
                        className="dropdownInput" 
                        value={selectJob} 
                        onChange={handleJobSelected}>
                    <option unselectable>Select Job</option>
                    {
                        uniqueArray.map((job, index) => {
                           return <option key={index} value={job}> {job} </option>
                        })
                    }
                    </select>
                    <input 
                        type='search' 
                        className="searchInput"
                        onChange={handleLocation}
                        value={location}
                        placeholder="location" />
                </div>
                <button className="searchJobBtn" onClick={Search}>SEARCH</button>
            </div>
                  {renderSuggestions()}
            </div>
            <div className="jobListingContianer">
                <div></div>
            </div>
            <div className="browseJobsContainer">
                <div className="browseJobs">
                    <h2>Browse jobs and land a career of your dreams</h2>
                    <p>We connect the best talent with the most renowned startup companies worldwide.</p>
                    <button className="toSearchJobsBtn">SEARCH JOBS</button>
                </div>    
            </div>
            <div className="employersAds">
                <div className="employersHead">
                    <h2>Employers</h2>
                    <p>Hiring? Advertise with us. We connect companies with talented individuals globally</p>
                </div>
                <div className="employersAdsContent">
                <EmployersAds 
                    image={Logo}
                    title="Advertise"
                    text="Post jobs & track the performance"
                 />
                 <EmployersAds 
                    image={Logo}
                    title="Interview & shortlist"
                    text="Candidates of your preference"
                 />
                 <EmployersAds 
                    image={Logo}
                    title="Resume database"
                    text="Browse & hire from our talent pool"
                 />
                 </div>
            </div>
            <div className="hireTalent">
                <div className="talents">
                    <h2>Hire the best talent today</h2>
                    <p>Select one of our packages and reach our database of candidates instantly.</p>
                    <button className="toPostJob">POST A JOB</button>
                </div>
            </div>
            <div className="ourStats">
                <p className="ourStatsHead">Our stats</p>
                {/* Reusable compnents needs to be here */}
                <div className="statsContainer">
                    <Stats 
                        Icon={Mark}
                        number="1"
                        text="JOBS OFFERS" />
                    <Stats 
                        Icon={Mark}
                        number="1"
                        text="REGISTERED COMPANIES" />
                    <Stats 
                        Icon={Mark}
                        number="2"
                        text="RESUMES" />
                    <Stats 
                        Icon={Mark}
                        number="2"
                        text="DAILY USERS" />    
                </div>
                <div className="footer">
                    <h2>About US</h2>
                    <img src={AboutUsImg} alt="aboutUsImage" className="aboutUsImg" />
                    <p>Copyright 2021 <strong>Job Portal</strong>. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
