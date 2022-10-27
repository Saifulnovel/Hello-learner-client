import React from 'react';

const Faq = () => {
    return (
      <div className="container mx-auto">
        <div className=" ">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Who are we?
            </div>
            <div className="collapse-content">
              <p>We are a team , who helps you to learn programming languages</p>
            </div>
          </div>

          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Who can access this courses?
            </div>
            <div className="collapse-content">
              <p>
               Any hardwork parson can access this course , basic english skill must be needed
              </p>
            </div>
          </div>
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Who is our instructor?
            </div>
            <div className="collapse-content">
              <p>
               Many of our teacher are from P hero, who is the boss of programming
              </p>
            </div>
          </div>
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Why choose us?
            </div>
            <div className="collapse-content">
              <p>
                We promises to make you a professional learner
              </p>
            </div>
            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Did we available offline?
              </div>
              <div className="collapse-content">
                <p>
                 Yes , our office is at lisbon , portugal
                </p>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Any queries?
                </div>
                <div className="collapse-content">
                  <p>Please contact us , contacts are given in homepage footer section</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;