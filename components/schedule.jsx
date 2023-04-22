import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import momentTimezonePlugin from '@fullcalendar/moment-timezone'
import momentPlugin from '@fullcalendar/moment'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

const schedule = () => {
    const events = [
        {
            daysOfWeek: ['2'],
            startTime: '18:00:00',
            endTime: '19:00:00',
            color: '#65a30d',
            title: "Orta Seviye Grubu"
        }, {
            daysOfWeek: ['4'],
            startTime: '18:00:00',
            endTime: '19:00:00',
            color: '#65a30d',
            title: "Orta Seviye Grubu"
        }, {
            daysOfWeek: ['2'],
            startTime: '15:00:00',
            endTime: '16:00:00',
            color: '#ca8a04',
            title: "İleri Seviye Grubu"
        }, {
            daysOfWeek: ['4'],
            startTime: '15:00:00',
            endTime: '16:00:00',
            color: '#ca8a04',
            title: "İleri Seviye Grubu"
        }, {
            daysOfWeek: ['2'],
            startTime: '16:30:00',
            endTime: '17:30:00',
            color: '#0891b2',
            title: "Başlangıç Grubu-2"
        }, {
            daysOfWeek: ['4'],
            startTime: '16:30:00',
            endTime: '17:30:00',
            color: '#0891b2',
            title: "Başlangıç Grubu-2"
        }, {
            daysOfWeek: ['1'],
            startTime: '18:00:00',
            endTime: '19:00:00',
            color: '#9333ea',
            title: "Başlangıç Grubu-1"
        }, {
            daysOfWeek: ['3'],
            startTime: '18:00:00',
            endTime: '19:00:00',
            color: '#9333ea',
            title: "Başlangıç Grubu-1"
        }, {
            daysOfWeek: ['1'],
            startTime: '16:00:00',
            endTime: '17:00:00',
            color: '#94a3b8',
            title: "Swing Yoga"
        }, {
            daysOfWeek: ['3'],
            startTime: '16:00:00',
            endTime: '17:00:00',
            color: '#94a3b8',
            title: "Swing Yoga"
        }, {
            daysOfWeek: ['5'],
            startTime: '13:00:00',
            endTime: '14:00:00',
            color: '#2dd4bf',
            title: "İleri Seviye Grubu"
        }, {
            daysOfWeek: ['5'],
            startTime: '16:00:00',
            endTime: '17:30:00',
            color: '#8b5cf6',
            title: "Çiftler  Grubu"
        }
    ];
    return (
        <div name={"schedule"} className={"container mx-auto  px-4 select-none z-10 mt:96 sm:mt-0"}>
            <div className={"flex flex-col"}>
                <div className={"tracking-widest uppercase text-center mt-10 mb-8"}>
                    <h2 className={"text-3xl font-Avanir"}>Çalışma Takvimi</h2>
                    <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
                </div>
                <div className={"flex flex-row justify-center mb-10"}>
                    <FullCalendar
                        initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
                        plugins={[dayGridPlugin, timeGridPlugin, momentPlugin, interactionPlugin, momentTimezonePlugin, bootstrap5Plugin]}
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
                        timeZone={'Europe/Istanbul'}
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
            </div>

        </div>
    )
}

export default schedule