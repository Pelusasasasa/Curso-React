import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalenderPages } from "../calender";

export const AppRoutes = () => {

    const authStatus = 'authenticated';

  return (
    <Routes>
        {
            (authStatus === 'not-authenticated')
            ? <Route path="auth/*" element={<LoginPage />} />
            : <Route path="/*" element={<CalenderPages />} />
        }
    </Routes>
  )
}
