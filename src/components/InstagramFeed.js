import React from 'react';
import '../styles/InstagramFeed.css';

const InstagramFeed = () => {
  return (
    <section className="instagram-feed-section">
      <h2>Nosso Instagram</h2>
      <iframe src="//lightwidget.com/widgets/48bd8ac0792b5072bc57b6d985d1a5af.html" scrolling="no" allowTransparency="true" className="lightwidget-widget" style={{width:'100%', border:0, overflow:'hidden'}}></iframe>
    </section>
  );
};

export default InstagramFeed;
