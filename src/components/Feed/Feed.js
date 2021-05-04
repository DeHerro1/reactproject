import React, { useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

import Search from '@material-ui/icons/SearchRounded';
import Arrow from '@material-ui/icons/ArrowBack';
import Location from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';

const Feed = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleShowSearch = () => {
        setShowSearch(true);
    }

    const handleDropSearch = () => {
        setShowSearch(false);
    }

    return (
        <div>
            <nav className="feedNav">
                {/* <h1>Logo</h1> */}
                <div className="searchIconContainer">
                    {/* <Search className="searchIcon" onClick={handleShowSearch} /> */}
                </div>
                { <div className='searchHome'>
                    <Home
                    closeSearch={handleDropSearch} 
                    Locate={Location}
                    Work={Work}
                    Icon={Arrow} />
                </div>}
                
            </nav>
            <p>Feeds</p>
            {/* <div className="navbar"> 
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
            </div> */}
        </div>
    )
}

export default Feed;
