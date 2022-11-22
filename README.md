### MicroFrontends. Module Federation

This repo holds a project that uses 2 host apps and a remote app; all use tailwind css.

`remote` uses with SolidJS\
`host` uses SolidJS\
`host-react` uses React, `remote` & `host` use SolidJS

The purpose of this repo is to demo using a a fully functional solid js micro frontend embeded into other host projects.

[host](http://localhost:8080/) is a solid js host consuming the [remote-counter]().\
[host-react](http://localhost:3001/) is a react host consuming the [remote-counter]().

### Setup

Steps to do in each application folders (remote-counter, host, host-react):

`npm install`

`npm start`

### Notes.

Key settings in webpack.config:

- **remote** (uses port **3030**)

  `
    name: "remote_counter",\
    ...\
    exposes: {\
      "./Counter": "./src/components/Counter.jsx",\
      "./CounterWrapper": "./src/CounterWrapper.jsx",\
    }
  `

- **host** (uses port **8080**)

  `
    remotes: {
      remote_counter: "remote_counter@http://localhost:3030/remoteEntry.js",
    }
  `
- **host-react** (uses port **3001**)

  `
    remotes: {
      remote_counter: "remote_counter@http://localhost:3030/remoteEntry.js",
    }
  `
  

CounterWrapper is needed to be able to use SolidJS in a React application. consumed in App.jsx in host-react.
