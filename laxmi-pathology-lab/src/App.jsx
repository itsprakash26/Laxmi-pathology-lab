import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import BookTest from "./pages/BookTest";
import DownloadReport from "./pages/DownloadReport";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/book-test" element={<BookTest />} />

          <Route path="/download-report" element={<DownloadReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
