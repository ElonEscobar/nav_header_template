import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <>
  <RouterProvider router={router} />
  </>;
}

export default App;
