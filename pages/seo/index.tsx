import React from 'react';
import { getSession } from "next-auth/react";

const Seo = () => {
  return (
    <div>
      seo page
    </div>
  );
};

export default Seo;

export async function getServerSideProps(context: any) {
  const session  = await getSession(context);
  console.log('session: ', session)
  if(!session) {
    return{
      redirect: {
      destination:  'api/auth/google/signin?callbackUrl=http://localhost:3000/seo',
        permanent: false
      }
    }

  }else{
    return ({
      props: {
        data: {}
      }
    })
  }
}
