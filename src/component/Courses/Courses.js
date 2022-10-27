import React from 'react';

import { useLoaderData } from 'react-router-dom';


const Courses = () => {
    const coursesDetails = useLoaderData();
    console.log(coursesDetails);

    const { name, title, details, logo, instructor, learner } = coursesDetails;

    return (
      <div className="container w-2/4 rounded-3xl mx-auto mb-16 bg-gray-300">
        <div className="card lg:card glass w-100 mb-16 bg-base-100 shadow-xl">
          <figure>
            <img className="h-96" src={logo} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-6xl">{name}</h2>
            <h2 className="card-title">{title}</h2>
            <p>{details}</p>
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">Instructor : {instructor}</h2>
              <h2>Running student : {learner}</h2>
            </div>
            <button className="btn btn-outline">Get Premium Access</button>
          </div>
        </div>
      </div>
    );
};

export default Courses;