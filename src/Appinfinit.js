import axios from "axios";
import {  useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Loader from "./Loader";

const LIMIT = 5;

const App = () => {
const [users, setUsers] = useState([]);
const [totalUsers, setTotalUsers] = useState(0);
const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
    }, 3000);
    axios.get('http://localhost:8080', {
      params: {
        page: activePage,
        size: LIMIT
      }
    }).then(({data}) => {
      setActivePage(activePage+ 1);
      setUsers([...users, ...data.records]);
      setTotalUsers(data.total)
    }).catch(error => {
      console.log(error.response);
    })
  }


  return (
    <div className="app">  
        <InfiniteScroll
            dataLength={users.length}
            next={fetchData}
            hasMore={users.length < totalUsers}
            loader={<Loader/>}
            // endMessage={
            //   <p style={{ textAlign: 'center', marginTop: '10px' }}>
            //     <b>Yay! You have seen it all</b>
            //   </p>
            // }
          >
         {users.map((user,index) => (
          <div className="card mt-2"  style={{
            padding: 13
          }}>
          <div className="card-body">
            <div className="userIntro">
              <div className="userTitles">
                <h5 className="card-title">{index} - {user.college_name + ' =====> ' + user.address}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{"@" + user.college_name}</h6>
              </div>
            {/* <div>
              <img src={user.image}  height={150}/>
            </div> */}
            </div>
            {/* <p className="card-text"> {user.address.address + ', ' + user.address.city + ', ' + user.address.state + ' ' + user.address.postalCode}</p>
            <a href={user.domain} className="card-link">Domain link</a> */}
          </div>
        </div>
         ))}
         </InfiniteScroll>
    </div>
  );
};

export default App;