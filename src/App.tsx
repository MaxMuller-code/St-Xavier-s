import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import EventsPage from "./components/EventsPage";
import StreamsPage from "./components/StreamsPage";
import routes from "tempo-routes";

function App() {
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route
            path="/events"
            element={<EventsPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/streams"
            element={<StreamsPage onNavigate={handleNavigate} />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
