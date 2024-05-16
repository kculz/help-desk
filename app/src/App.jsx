import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact, Dashboard, Footer, ForgotPassword, Header, Landing, Login, Logout, ProtectedRoute, Register } from "./components"
import { ToastContainer } from "react-toastify"
import { Cyber, Email, Hardware, Network, Printer, Software } from "./pages"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<ProtectedRoute />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software />} />
          <Route path="/printer" element={<Printer />} />
          <Route path="/cybersecurity" element={<Cyber />} />
          <Route path="/email" element={<Email />} />
          <Route path="/network" element={<Network />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    <ToastContainer />
  </>
  )
}

export default App
