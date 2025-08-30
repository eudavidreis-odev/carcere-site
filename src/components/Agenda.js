import React from 'react';

const Agenda = ({ shows }) => {
  return (
    <section id="agenda">
      <h2>Agenda</h2>
      <ul className="tour-dates">
        {shows.map((show, index) => (
          <li key={index}>
            <span>{show.date}</span>
            <span>{show.city}</span>
            <span>{show.place}</span>
            <a href={show.ticketsUrl}>Ingressos</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Agenda;
