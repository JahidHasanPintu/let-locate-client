import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-72 mb-5" style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')`}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;