import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Footer, ForgotPassword, Header, Landing, Login, Logout, ProtectedRoute, Register } from "./components"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<ProtectedRoute />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    <ToastContainer />
  </>
  )
}

export default App
