import React from 'react'
import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import { Header } from '../Header/Header';
import Sidebar from '../Header/Sidebar';
import Footer from '../../pages/Footer';
export default function DashboardLayout({setGoto}) {
    const [open, setOpen] = useState(true);
  return (
    <div>
         <Header setGoto={setGoto} open={open} setOpen={setOpen}/>
         <Sidebar open={open} setOpen={setOpen} />

{/* This element will render either <DashboardMessages> when the URL is
    "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
*/}
<Outlet />
<Footer />
    </div>
  )
}