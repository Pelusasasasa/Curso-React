import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"

export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
