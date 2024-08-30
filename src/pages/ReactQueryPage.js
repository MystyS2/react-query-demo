import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const ReactQueryPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/posts");
  };
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"], // unique query name
    queryFn: fetchPost,
    retry: 1,
    staleTime:5000,
    select:(data) => {
      return data.data;
    },
    refetchOnMount:false,
    refetchOnWindowFocus:true
  });

  if (isLoading) {
    return <h1 className="page loading">Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="page">
      ReactQueryPage
      <div>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
        <button onClick={refetch}>post 리스트 새로고침(api재호출)</button>
      </div>
    </div>
  );
};

export default ReactQueryPage;
