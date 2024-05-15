import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import InfiniteScroll from 'react-infinite-scroller';
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const InfiniteScrollExample1 = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    axios
      .get("http://localhost:8080?offset=0&limit=2")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {  alert(index);
    axios
      .get(`http://localhost:8080?offset=${index}&limit=2`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);

        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 2);
  };

  return (
    <div
  id="scrollableDiv"
  style={{
    height: 300,
    overflow: 'scroll',
  }}
>
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading</h4>}
    >
      <div className='container'>
        <div className='row'>
          {items &&
            items.map((item) => <ProductCard data={item} key={item._id} />)}
        </div>
      </div>
    </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollExample1;