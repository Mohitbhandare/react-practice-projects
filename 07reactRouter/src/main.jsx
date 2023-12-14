import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import { About, ContactUs, GitHub, Home, User } from './components/index.js';
import { githubInfoLoader } from './components/GitHub/GitHub.jsx';

// step-1 we can use this process to route
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

// step-2
// we can also do nested routing example -> /about/mohit/1
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      {/* dynamic Routing */}
      <Route path="user/:userId" element={<User />} />
      {/* we can optimize the code when we calling the api using the loader  */}
      <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
