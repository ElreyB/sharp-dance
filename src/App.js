import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ABOUT,
  BIOS,
  CLASSES,
  CONTACT,
  DIANE,
  DONATIONS,
  ERROR,
  EVENTS,
  LANDING,
  MEDIA,
  PAST_EVENTS,
  PRESS,
  INTENSIVE,
} from "./constants";
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/404";
import About from "./pages/About";
import Bios from "./pages/Bios";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import DianeSharp from "./pages/DianeSharp";
import Donations from "./pages/Donations";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Press from "./pages/Press";
import Intensive from "./pages/Intensive";
import { Header, ScrollToTop, ScrollToTopButton } from "./styledGuide";

function withMainLayout(Component) {
  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <Header />

      <ScrollToTop />
      <ScrollToTopButton />

      <Routes>
        <Route path={ABOUT} exact element={withMainLayout(About)} />
        <Route path={BIOS} exact element={withMainLayout(Bios)} />
        <Route path={CLASSES} exact element={withMainLayout(Classes)} />
        <Route path={CONTACT} exact element={withMainLayout(Contact)} />
        <Route path={DIANE} exact element={withMainLayout(DianeSharp)} />
        <Route path={DONATIONS} exact element={withMainLayout(Donations)} />
        <Route path={EVENTS} exact element={withMainLayout(Events)} />
        <Route path={PAST_EVENTS} exact element={withMainLayout(Events)} />
        <Route path={LANDING} exact element={withMainLayout(Home)} />
        <Route path={"/sharp-dance"} exact element={withMainLayout(Home)} />
        <Route
          path={`${MEDIA}/:performanceTitle`}
          exact
          element={withMainLayout(Media)}
        />
        <Route path={MEDIA} exact element={withMainLayout(Media)} />
        <Route path={PRESS} exact element={withMainLayout(Press)} />
        <Route path={INTENSIVE} exact element={withMainLayout(Intensive)} />
        <Route path={ERROR} element={withMainLayout(Error404)} />
        <Route element={withMainLayout(Error404)} />
      </Routes>
    </Router>
  );
}

export default App;
