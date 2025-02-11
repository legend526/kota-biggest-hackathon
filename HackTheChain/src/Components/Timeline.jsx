import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Timeline.css';

const timelineEvents = [
  { id: 1, title: "Registration", date: "2025-01-10", description: "Registration period for HackTheChain 3.0" },
  { id: 2, title: "Acceptance Letter rollout", date: "2025-01-20", description: "Mails sent to accepted hackers" },
  { id: 3, title: "Hacking Hours", date: "2025-02-15", description: "The hackathon period" },
  { id: 4, title: "Winner Announcement", date: "2025-02-16", description: "Winner Announcement and Closing Ceremony" },
];

const findNearestEvent = (events) => {
  const today = new Date();
  let closestEvent = events[0];
  let closestDiff = Math.abs(new Date(events[0].date) - today);

  events.forEach(event => {
    const eventDate = new Date(event.date);
    const diff = Math.abs(eventDate - today);
    if (diff < closestDiff) {
      closestDiff = diff;
      closestEvent = event;
    }
  });

  return closestEvent;
};

const Timeline = () => {
  const eventRefs = useRef([]);
  const timelineRef = useRef();
  const progressBarRef = useRef();
  const coloredOverlayRef = useRef();
  const logoRef = useRef();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const nearestEvent = findNearestEvent(timelineEvents);
    const nearestEventIndex = timelineEvents.findIndex(event => event.id === nearestEvent.id);
    const isLastEvent = nearestEventIndex === timelineEvents.length - 1;

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && nearestEventIndex !== -1 && !hasScrolled) {
            setTimeout(() => {
              eventRefs.current[nearestEventIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });

              const timelineHeight = eventRefs.current[eventRefs.current.length - 1].offsetTop;
              const offset = eventRefs.current[nearestEventIndex].offsetTop;
              const progress = Math.min((offset / timelineHeight) * 100, 100);

              coloredOverlayRef.current.style.height = `${progress}%`;
              coloredOverlayRef.current.style.background = `linear-gradient(180deg, #00ff66 ${progress}%, #000 100%)`;

              const maxLogoPosition = progressBarRef.current.clientHeight * 0.95;
              const logoPosition = isLastEvent ? maxLogoPosition : (progressBarRef.current.clientHeight * (progress / 100));
              logoRef.current.style.transform = `translateY(${logoPosition}px)`;
              eventRefs.current[nearestEventIndex].style.borderColor = 'white';

              setHasScrolled(true);
            }, 1000);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => {
      timelineObserver.disconnect();
    };
  }, [hasScrolled]);

  return (
    <div>
      <h1
        className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white text-center mb-10 newfont"
      >
        Timeline
      </h1>

      <div ref={timelineRef}>
        {timelineEvents.map((event, index) => (
          <div key={event.id} ref={(el) => (eventRefs.current[index] = el)} className="timeline-event">
            <div className="timeline-event-content content-font">
              <div className="timeline-event-title text-blue-400">{event.title}</div>
              <div className="timeline-event-date">{event.date}</div>
              <div className="timeline-event-description">{event.description}</div>
            </div>
            <div className="timeline-event-connector border-dashed"></div>
          </div>
        ))}
        <div className="progress-bar" ref={progressBarRef}>
          <div className="colored-overlay" ref={coloredOverlayRef}>
            <div className='timeline-logo'>
              <div alt="progress-logo" className='progress-logo' ref={logoRef}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
