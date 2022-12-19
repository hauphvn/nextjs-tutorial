import  useSWR  from "swr";
import React from "react";
import Link from "next/link";

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
}
const DashboardSwr = () => {
  const {data, error} = useSWR('dashboard', fetcher);

  if(!data){
    return (<div>Loading....</div>)
  }
  if(error){
    return (<div>An error occur</div>);
  }
  return(
    <>
      <div><Link href={'/'}>Go home</Link></div>
      <div>Posts: {data?.posts}</div>
      <div>Likes: {data?.likes}</div>
      <div>Followers: {data?.followers}</div>
      <div>Following: {data?.following}</div>
    </>
  )
}
export default DashboardSwr;
