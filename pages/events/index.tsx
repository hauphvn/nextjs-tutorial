import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Events = (props: any) => {
  const {events} = props;
  const router = useRouter();
  const [eventsData, setEventsData] = useState<any[]>(events);
  const fetchDataByCompletedStatus = async() => {
    const response = await fetch('http://localhost:4000/todos?completed=true');
    const data = await response.json();
    setEventsData(data);
    await router.push('/events?completed=true', undefined, { shallow: true });
  }
  if(!eventsData || eventsData?.length === 0){
    return (<div>Loading...</div>);
  }
  return(
    <div>
      <Link href={'/'}>Go home</Link>
      <hr/>
      <button onClick={fetchDataByCompletedStatus}>Completed Status Filter</button>
      {eventsData && eventsData.map((event: any) => (
        <div key={event.id}>
          <div>Title: {event.title}</div>
          <div>Title: {event.completed? 'TRUE' : 'FALSE'}</div>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default Events;

export async function  getServerSideProps(context: any) {
  const {query} = context;
  const {completed} = query;
  const queryString = completed ? 'completed=true' : '';
  const response = await fetch(`http://localhost:4000/todos?${queryString}`);
  const data = await response.json();
  console.log(data)
  return ({
    props: {
      events: data
    }
  })
}
