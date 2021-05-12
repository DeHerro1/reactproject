import React, { useEffect, useState } from "react";
import db from "../../firebase";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import SearchRounded from '@material-ui/icons/SearchRounded';
import { useStateValue } from '../../AuthContext';

const SearchedJob = ({ closeSearch, Icon, Locate, Work }) => {
  const [posts, setPosts] = useState([]);
  const [company, setCompany] = useState("");
  const [said, setSaid] = useState([]);
  const [job, setJob] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [location, setLocation] = useState("");
  const [roleInfo, setRoleInfo] = useState([]);
  const [selectJob, setSelectJob] = useState('');
  const [{SearchJob}, dispatch] = useStateValue();

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
// console.log(uniqueArray);

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

  
  console.log(SearchJob?.length);

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
    setShowResult(true);
  };

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

  let items;
  const showCompanyInfo = () => {
    for (let i = 0; i < display.length; i++) {
      let actualRoles = posts[i].Roles;
      for(let x = 0; x < actualRoles.length; x++) {
        console.log(actualRoles[x]);
      }
      
      if (
        company.toLowerCase() === posts[i].companyName.toLowerCase() &&
        location.toLowerCase() === posts[i].location.toLowerCase() &&
        verRole === true
      ) {
        let roles = posts[i].Roles;
       let fun = Object.values(roles).filter(item => item);
       console.log(fun);
        items = (
          <CompanyProfile
            companyName={posts[i].companyName}
            about={posts[i].about}
            location={posts[i].location}
            job={fun[i].role}
            maxYears={fun[i].maxYears}
            minYears={fun[i].minYears}
            jobBenefits={fun[i].benefits}
            hQuarters={posts[i].hquarters}
            img={posts[i].image}
            workEnv={posts[i].workEnv}
            worklife={posts[i].worklife}
            Salary={posts[i].Salary}
            jobSecurity={posts[i].jobSecurity}
            founded={posts[i].Founded}
            revenue={posts[i].Revenue}
            size={posts[i].Size}
            normRoles={another}
            reviews={posts[i].reviews}
            companeEmail={posts[i].companeEmail}
            website={posts[i].website}
            type={posts[i].type}
            mission={posts[i].mission}
          />
        );
        break;
      } else if (company === "" && job === "" && location === "") {
        items = "Nothing to search";
      } else {
        console.log("not sent");
        items = "There is no match for your search";
      }
    }
    return items;
  };

  return (
    <div>
        <p>Searched Company Info</p>
        {/* <CompanyProfile /> */}
    </div>
  );
};

export default SearchedJob;
