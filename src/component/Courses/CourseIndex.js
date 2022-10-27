import { getAuth } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import app from "../../Config/firebase.config";
import { ContextData } from "../../Context/DataProvider";

const auth = getAuth(app)
const CourseIndex = () => {

  const { datas } = useContext(ContextData)
  
  return (
    <div className="grid md:grid-cols-12 gap-5 container mb-16 mx-auto">
      <div className="md:col-span-3 h-96 text-center shadow-inner shadow-stone-400 bg-yellow-200 rounded-box">
        <h3 className="font-semibold text-3xl mb-6 text-slate-500 hover:text-blue-600">
          Courses List
        </h3>
        <ul className="menu text-center ">
          {datas.map((data) => (
            <li
              key={data.id}
              className="hover-bordered mb-1  mx-auto"
            >
              <Link to={`/courses/${data.id}`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-9">
        <div className="grid md:grid-cols-2 gap-4 rounded-lg  ">
          {datas.map((data) => (
            <div
              key={data.id}
              className="card bg-cyan-400 drop-shadow-md  hover:drop-shadow-2xl"
            >
              <button className="btn gap-2">
                Price
                <div className="badge badge-secondary">{data.learner}$</div>
              </button>
              <figure>
                <img
                  className="h-44 mt-2  rounded"
                  src={data?.logo}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data?.title}</h2>
                <p>Ratings : {data.ratings}</p>

                <p>
                  {data.intro > 50
                    ? data.intro.slice(0, 50) + "..."
                    : data.intro}
                </p>
                <div className="card-actions justify-center">
                  <Link to={`/courses/${data.id}`}>
                    <button className="btn btn-outline m-0 ">
                      More Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseIndex;
