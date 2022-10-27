import React from 'react';

const Blog = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-center text-5xl  font-bold '>Here is Some Question and Answer </h1>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Ques no.1: What is cors?
          </div>
          <div className="collapse-content">
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request. An example of a cross-origin request:
              the front-end JavaScript code served from https://domain-a.com
              uses XMLHttpRequest to make a request for
              https://domain-b.com/data.json. For security reasons, browsers
              restrict cross-origin HTTP requests initiated from scripts. For
              example, XMLHttpRequest and the Fetch API follow the same-origin
              policy. This means that a web application using those APIs can
              only request resources from the same origin the application was
              loaded from unless the response from other origins includes the
              right CORS headers.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Ques No.2: Why are you using firebase? What other options do you
            have to implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience.
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Ques no.3: How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Ques No.4: What is Node?
          </div>
          <div className="collapse-content">
            <p>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine and executes
              JavaScript code outside a web browser, which was designed to build
              scalable network applications. <br />
              It is a used as backend service where javascript
              works on the server-side of the application. This way javascript
              is used on both frontend and backend. Node. js runs on chrome v8
              engine which converts javascript code into machine code, it is
              highly scalable, lightweight, fast, and data-intensive
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;