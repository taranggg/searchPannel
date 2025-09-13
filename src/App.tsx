import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPanel from "./components/SearchPannel";
import DocsPage from "./pages/DocsPage";
import DocsButton from "./components/DocsButton";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPanel />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
      <DocsButton />
    </BrowserRouter>
  );
};

export default App;
