
import { BrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Flow from "@/pages/Flow";
import Markets from "@/pages/Markets";
import AI from "@/pages/AI";
import APIConfig from "@/pages/APIConfig";
import NotFound from "@/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flow" element={<Flow />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/api" element={<APIConfig />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
