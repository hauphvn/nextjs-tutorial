import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "components/Footer";
import Head from "next/head";

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
    <Head>
      <title>Dashboard</title>
      <meta name={'description'} content={'This is my dashboard hauphvn'}/>
    </Head>
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

Dashboard.getLayout = function PageLayout(page: any) {
  return (<>
    {page}
    <Footer/>
  </>)
}
