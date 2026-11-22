import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router";
import ServiceDetails from "./pages/ServiceDetails";
const App = () => {
  return (
    <div className="" data-theme="light">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="services/:id" element={<ServiceDetails />} />
      </Routes>
    </div>
  );
};

export default App;
