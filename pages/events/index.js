import { getAllEvents } from "../../dummy-data";
import EventList from "../../component/events/event-list";
import EventsSearch from "../../component/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventsPage = () => {
    const router = useRouter()
    const events = getAllEvents()

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
 
export default AllEventsPage;