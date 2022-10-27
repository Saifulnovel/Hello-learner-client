import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../asset/1.svg'
import logo2 from '../asset/2.svg'
import logo3 from "../asset/3.svg"
import logo4 from '../asset/4.svg';
import logo5 from '../asset/5.svg'

const Home = () => {
    return (
      <div>
        <div className="header bg-zinc-800 mx-auto text-center pb-16">
          <h1 className="text-zinc-50 text-6xl font-bold py-16">
            Start Your Journey with HELLO LEARNER , Now
          </h1>
          <div className="desc text-zinc-200 text-2xl font-normal mb-8">
            <p>
              {" "}
              Hello learner is an online interactive platform that helps users
              to learn, practice coding skills and join the developer community
              with millions of programmers.
            </p>
            <p>
              Join our global community.{" "}
              <span className="font-bold">It's free.</span>
            </p>
          </div>
          <Link to='/courseindex'>
            <button className="btn btn-wide btn-info rounded-md hover:bg-sky-700">
              Start Learning Now
            </button>
          </Link>
        </div>

        <div className="pb-24">
          <div className="container mx-auto pt-20 grid grid-cols-3 gap-8">
            <div className="card shadow-md bg-white rounded-md">
              <figure className="pt-10">
                <img src={logo3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center pb-20">
                <h2 className="card-title text-4xl font-bold mb-8">
                  Be a Perfect Learner
                </h2>
                <p className="text-xl text-slate-500">
                  No matter your experience level, you'll be writing{" "}
                  <span className="font-bold">
                    real, functional code within minutes
                  </span>{" "}
                  of starting your first course.
                </p>
              </div>
            </div>

            <div className="card shadow-md bg-white rounded-md">
              <figure className="pt-10">
                <img src={logo1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center pb-20">
                <h2 className="card-title text-4xl font-bold mb-8">
                  Tailored to you
                </h2>
                <p className="text-xl text-slate-500">
                  No matter your experience level, you'll be writing{" "}
                  <span className="font-bold">
                    real, functional code within minutes
                  </span>{" "}
                  of starting your first course.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md bg-white rounded-md">
              <figure className="pt-10">
                <img src={logo2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center pb-20">
                <h2 className="card-title text-4xl font-bold mb-8">
                  Tailored to you
                </h2>
                <p className="text-xl text-slate-500">
                  No matter your experience level, you'll be writing{" "}
                  <span className="font-bold">
                    real, functional code within minutes
                  </span>{" "}
                  of starting your first course.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- key aspect --> */}
        <div className="bg-white py-24">
          <div className="key-aspect container mx-auto text-center">
            <h1 className="w-2/4 mx-auto text-5xl font-bold mb-28">
              The perfect platform to boost your technical skills
            </h1>
            <div className="aspects flex gap-8">
              <div className="students flex flex-col gap-8 basis-1/2">
                <img src={logo4} alt="students" />
                <h2 className="text-4xl font-bold">Students</h2>
                <p className="text-xl text-slate-500 w-4/6 mx-auto">
                  First, thinking in code allows companies to cleanly separate
                  data from analysis of the data, which allows teams to improve
                  each one independently of the other. When data and analysis
                  are cleanly separated, different teams can focus on
                  independently improving each aspect, leading to faster
                  progress
                </p>
              </div>
              <div className="professionals flex flex-col gap-8 basis-1/2">
                <img src={logo5} alt="professionals" />
                <h2 className="text-4xl font-bold">Professionals</h2>
                <p className="text-xl text-slate-500 w-4/6 mx-auto">
                  Coding specialists are skilled in classifying medical data
                  from patient records, often in a hospital setting but also in
                  a variety of other healthcare settings. The CCS credential
                  demonstrates a practitioner's tested skills in data quality
                  and accuracy as well as mastery of coding proficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- contact --> */}
        <div className="bg-gray-600">
          <div className="container mx-auto py-24">
            <h1 className="text-slate-300 text-center text-6xl font-semibold pb-16">
              Contact
            </h1>
            <section className="py-6 dark:bg-gray-300 dark:text-gray-50">
              <div className=" mx-auto ">
                <div className="py-6 md:py-0 md:px-6">
                  <h1 className="text-4xl font-bold text-slate-300">
                    Get in touch
                  </h1>

                  <div className="space-y-4">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 sm:mr-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-slate-300">Lisbon,Portugal</span>
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 sm:mr-6"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      <span className="text-slate-300">123456789</span>
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 sm:mr-6"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <span className="text-slate-300">
                        hellolearning@hl.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* <!-- footer --> */}
      </div>
    );
};

export default Home;