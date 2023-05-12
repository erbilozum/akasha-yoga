import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

const ScheduleCard = ({data}) => {
    return (
        <div className={"flex flex-row justify-center mb-10"}>
            <FullCalendar
                events={data} // alternatively, use the `events` setting to fetch from a feed
                plugins={[dayGridPlugin, timeGridPlugin,  interactionPlugin,  bootstrap5Plugin]}
                headerToolbar={{
                    start: 'title', // will normally be on the left. if RTL, will be on the right
                    center: '',
                    end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
                }}
                buttonIcons={{
                    prev: 'chevron-left',
                    next: 'chevron-right',
                    prevYear: 'chevrons-left', // double chevron
                    nextYear: 'chevrons-right' // double chevron
                }}
               // timeZone={'Europe/Istanbul'}
                initialView={'timeGridWeek'}
                titleFormat={'MMMM D, YYYY'}
                locale={'tr'}
                firstDay={'1'}
                //expandRows={false}
                height={"auto"}
                //  contentHeight={100}
                aspectRatio={2}
                contentHeight={400}
                expandRows={false}
                themeSystem='bootstrap5'
                scrollTime={'17:00:00'}
                slotMinTime={"14:00:00"}
                slotMaxTime={"21:00:00"}
                allDaySlot={false}
                allDayText={'Tüm Gün'}
            />
        </div>
    );
};

export default ScheduleCard;