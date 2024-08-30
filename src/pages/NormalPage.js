import React, { useEffect, useState } from "react";

const NormalPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const fetchPost = async () => {
    setIsLoading(true);
    const url = "http://localhost:3004/posts";
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <h1 className="page loading">Loading...</h1>;
  }

  return (
    <div className="page">
      NormalFetchPage
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NormalPage;
