/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";

// Lazy-load all components
const LandingLayout = lazy(() => import("../Layout/LandingLayout.jsx"));
const ErrorLayout = lazy(() => import("../components/ErrorLayout.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const NewsAndBlogDetail = lazy(()=>import("../pages/NewsAndBlogDetail.jsx"));


// Reusable Loader Component
import Loader from "../components/Loading.jsx";
import TeamMembers from "../pages/TeamMember.jsx";
import NewsAndBlog from "../pages/NewsAndBlog.jsx";
import OurValues from "../pages/Values.jsx";


// Suspense wrapper for lazy-loaded components
const SuspenseWrapper = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000); // Show loader for 2 seconds before transitioning

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Suspense fallback={showLoader ? <Loader /> : null}>
      {children}
    </Suspense>
  );
};

// Define routes
const routes = [
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <LandingLayout />
      </SuspenseWrapper>
    ),
    children: [
      {
        path: "",
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
    
      },
      {
        path: "contact",
        element: (
          <SuspenseWrapper>
            <Contact />
          </SuspenseWrapper>
        ),
    
      },
      {
        path: "Team",
        element: (
          <SuspenseWrapper>
            <TeamMembers />
          </SuspenseWrapper>
        ),
    
      },
      {
        path: "news-blogs",
        element: (
          <SuspenseWrapper>
            <NewsAndBlog />
          </SuspenseWrapper>
        ),
    
      },
         {
        path: "/news-blogs/:id",
        element: (
          <SuspenseWrapper>
            <NewsAndBlogDetail />
          </SuspenseWrapper>
        ),
    
      },

      {
        path: "about",
        element: (
          <SuspenseWrapper>
            <About />
          </SuspenseWrapper>
        ),
    
      },
      {
        path: "values",
        element: (
          <SuspenseWrapper>
            <OurValues/>
          </SuspenseWrapper>
        ),
    
      },
      {
        path: "*", // Catch-all route for undefined paths
        element: (
          <SuspenseWrapper>
            <ErrorLayout />
          </SuspenseWrapper>
        ),
      },
    ],
  },
];

// Create router instance
const router = createBrowserRouter(routes);

export default router;
