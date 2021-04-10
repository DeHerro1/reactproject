import React, { useEffect, useState } from 'react';
import './Home.css';
import { withRouter } from 'react-router-dom';
import db from '../../firebase';

const Home = (props) => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState('');
    const [said, setSaid] = useState([]);

    useEffect(() => {
        db.collection('companies').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    let display = posts.map(post => post.companyName);

    const handleChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            
            suggestions = display.sort().filter(v => regex.test(v));
        }
        setSaid(() => (suggestions));
        setText(value);
    }

    const suggestionSelected = (name) => {
        setText(name);
        setSaid([]);
    }
    console.log(said);
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
        
        for(let i = 0; i < display.length; i++) {
            console.log(posts[i]);
            if(text === posts[i].companyName) {
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
                    <p><span  className="inline">Position:</span> {posts[i].position}</p>
                    <p><span>Benefits:</span> {posts[i].benefits}</p>
                    <div><span>Reviews:</span> {posts[i].reviews.map((review, index) => {
                        return <li key={index}> {review} </li>
                    })}</div>
                    <div><span>Work Life:</span> {posts[i].worklife.map((life, index) => {
                        return <li key={index}> {life} </li>
                    })}</div>
                    <div><span>Requirements:</span> {posts[i].requirements.map((requirements, index) => {
                        return <li key={index}> {requirements} </li>
                    })}</div>
                </div>
                           )
            }
        }
    

    return (
        <div className="home">
            <div>
                <input 
                    type="text"
                    onChange={handleChange}
                    value={text}
                    placeholder="Search companies"
                    />
                    {renderSuggestions()}
            </div>

            {
                items
            }
        </div>
    )
}

export default withRouter(Home);
