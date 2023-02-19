import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../component/events/event-list";
import EventsSearch from "../../component/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventsPage = (props) => {
    const router = useRouter()
    const { events } = props

    function findEventsHandler(year,month){
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return ( 
        <Fragment>
        <EventsSearch onSearch={findEventsHandler}></EventsSearch>
        <EventList items={events}></EventList>
        </Fragment>
     );
}
export async function getStaticProps(){
    const events = await getAllEvents()
    return{
        props: {
            events: events,
        },
        revalidate: 60
    }
}
 
export default AllEventsPage;