import React from "react";

const Roomate = () => {
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-lg">
        <figure>
          <img
            src="https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg"
            alt="Shoes" className="h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Roomate;
