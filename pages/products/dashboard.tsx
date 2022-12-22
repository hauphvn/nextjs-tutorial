import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "components/Footer";
import Head from "next/head";
import * as process from "process";
import { getSession, signIn } from "next-auth/react";

const Dashboard = (props: any) => {
  const {dataPreview} = props;
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<any>(null);
  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();

      setDashboardData(data);
      setIsLoading(false);
    }
    async function securePage() {
      const session = await getSession();
      if(!session){
        await signIn();
      }else {
     await fetchDashboardData();
      }
    }
    securePage();
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
    <div>Info process env: {process.env.NEXT_PUBLIC_ANALYTIC_ID}</div>
    <div>Info process env: {process.env.NEXT_PUBLIC_ANALYTIC_NAME}</div>
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

export async function getStaticProps(context: any) {
  const db = process.env.DB_NAME;
  const pwd = process.env.DB_PASS;
  console.log(`Connect db with user: ${db} and pwd: ${pwd}`)
  console.log('Rerender static props ', context);
  return ({
    props: {
      dataPreview: 'this is data preview'
    }
  })
}
