import { Sidebar } from "lucide-react"
import { Outlet } from "react-router-dom"
import Siderbar from "../components/Siderbar"
import BottomNav from "../components/BottomNav"


const Layout = () => {
  return (
    <div className="layout-container">
      <Siderbar />
      <div className="flex-1 overflow-y-scroll">
      < Outlet />
      </div> 
      <BottomNav />
    </div>
  )
}

export default Layout