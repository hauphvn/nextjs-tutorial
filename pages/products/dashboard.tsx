import React, { useEffect, useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();

      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);
  if (isLoading) {
    return (<div>
      Loading...
    </div>);
  }
  return (<div>
    <Link href={'/'}>Go home</Link>
    <hr/>
    <div>Dashboard</div>
    <hr/>
    {dashboardData && (
      <>
        <div>Posts: {dashboardData?.posts}</div>
        <div>Likes: {dashboardData?.likes}</div>
        <div>Followers: {dashboardData?.followers}</div>
        <div>Following: {dashboardData?.following}</div>
      </>
    )
    }
  </div>)
}
export default Dashboard;
