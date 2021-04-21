import React, { useEffect, useState } from 'react';
import './Home.css';
import db from '../../firebase';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [company, setCompany] = useState('');
    const [said, setSaid] = useState([]);
    const [job, setJob] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [location, setLocation] = useState('');

    let verRole = false;
    useEffect(() => {
        db.collection('companies').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    let display = posts.map(post => post.companyName);
    let displayRoles = posts.map(post => post.Roles);
    let displayLocation = posts.map(post => post.location);

    let jobResults = [];
    function see() {
        for(let i = 0; i < displayRoles.length; i++) {
            
            for(let x = 0; x < displayRoles[i].length; x++) {
                let fix = displayRoles[i][x];
                jobResults.push(fix);
                console.log(fix.toLowerCase() === job.toLowerCase() ? verRole = true : null);
            }
        }
    }
    see();
    console.log(jobResults);

    const handleChange = (e) => {
        const value = e.target.value;
        value.toLowerCase();
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            
            suggestions = display.sort().filter(v => regex.test(v));
        }
        setSaid(() => (suggestions));
        setCompany(value);
    }

    const handleLocation = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            
            suggestions = display.sort().filter(v => regex.test(v));
        }
        setSaid(() => (suggestions));
        setLocation(value);
    }

    const handleRole = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            
            suggestions = display.sort().filter(v => regex.test(v));
        }
        setSaid(() => (suggestions));
        setJob(value);
    }

    const Search = () => {
        setShowResult(true); 
    }

    const suggestionSelected = (name) => {
        setCompany(name);
        setSaid([]);
    }

    const renderSuggestions = () => {
        if(said.length === 0) {
            return null;
        }
        return (
            <ul>
                {said.map((item, index) => <li 
                    onClick={() => suggestionSelected(item)}
                    key={index}> {item} </li>)}
            </ul>
        )
    }

    let items;
    const showCompanyInfo = () => {
        for(let i = 0; i < display.length; i++) {
            if(company.toLowerCase() === posts[i].companyName.toLowerCase() && 
                location.toLocaleLowerCase() === posts[i].location.toLowerCase() &&
                verRole === true
                ) {
                items = (
                                    <div key={display[i]}>
                                    <h2 className="companyName"> {posts[i].companyName} </h2>
                                    <p><span>About Us: </span> {posts[i].about} </p>
                                    <p><span className="inline">Location: </span> {posts[i].location} </p>
                                    <img
                                        src={posts[i].image}
                                        width="200"
                                        height="200"
                                        alt={posts[i].companyName} />
                                    <p><span  className="inline">Salary:</span> {posts[i].Salary}</p>
                                    <p><span>Job Security:</span> {posts[i].jobSecurity}</p>
                                    <p><span>Benefits:</span> {posts[i].benefits}</p>
                                    <div><span>Reviews:</span> {posts[i].reviews.map((review, index) => {
                                        return <li key={index}> {review} </li>
                                    })}</div>
                                    <div><span>Work Life:</span> {posts[i].worklife.map((life, index) => {
                                        return <li key={index}> {life} </li>
                                    })}</div>
                                </div>
                                           )
                                    break;
                                        }
                                        else if(company === "" && job === "" && location === "") {
                                            items = ""
                                        }
                             else {
                                 if(company !== posts[i].companyName) {
                                    console.log('not sent')
                                    items = "There is no match for your search";
                                 }
                            
                        }
                    }
                        return items;
            }
        
    
    return (
        <div className="home">
            <div className="nav">
                <div className="nav_items">
                    <h2>Linked </h2>
                </div>
                    <input 
                        type="text"
                        onChange={handleChange}
                        value={company}
                        placeholder="Search Companies" />

                    <input
                        type="text"
                        onChange={handleRole}
                        value={job}
                        placeholder="Job Titles" />
                    <input 
                        type="text"
                        onChange={handleLocation}
                        value={location}
                        placeholder="Location" />
                    
                <button className="btn" onClick={Search}>Search</button>
            </div>
            {renderSuggestions()}
            {
               showResult && showCompanyInfo()
            }
        </div>
    )
}

export default Home;
