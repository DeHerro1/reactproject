import React from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';

const Feed = () => {
    return (
        <div>
            <p>Feeds</p>
            <div className="navbar"> 
                <Link className="goto_home home_link" to="/feed">
                    <div>
                        Home
                    </div>
                </Link>
                <Link className="goto_search search_link" to="/search">
                    <div>
                        Search
                    </div>
                </Link>
                <Link className="goto_profile profile_link" to="/profile">
                    <div>
                        Profile
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Feed;
