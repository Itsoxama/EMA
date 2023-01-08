import React from 'react'
import "./Home.css"
import { MdOutlineDashboard } from 'react-icons/md'
import { CgMediaLive } from 'react-icons/cg'
import { TbDeviceDesktopAnalytics, TbBriefcase, TbChartInfographic } from 'react-icons/tb'
import { AiTwotoneSecurityScan, AiOutlineMenuFold, AiOutlineLogout } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FiCamera } from 'react-icons/fi'
import { BsClockHistory } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { VscNote } from 'react-icons/vsc'
import { BiFileBlank } from 'react-icons/bi'
import { useState } from 'react'
import Dashboard from './Dashboard'
import Users from './Users/Users'
import Presence from './Presence/Presence'
import Prod from './Productivity/Prod'
import Userdata from './Userdata/Userdata'
import Snapshot from './Snapshot/Snapshot'
import Apps from './App/App'
import Projects from './Projects/Projects'
import Track from './Track/Track'
import Reports from './Report/Report'
import Leave2 from './Leave/Leave2'
import Notes from './Notes/Notes'
import Emp from './Employeetype/Emp'
import Jobsite from './Jobsite/Jobsite'
import { useEffect } from 'react'
const Home = () => {
useEffect(() => {
  if(localStorage.getItem('userid')&&localStorage.getItem('userid').length>0){
if(localStorage.getItem('emptype')==='admin'){
    
}
else{

    window.location.pathname='/user'
}
  }
  else{
    window.location.pathname='/login'
  }

  return () => {
    
  }
}, [])
function logout(){
    localStorage.removeItem('userid')
    window.location.pathname='/login'
}

    const [i, seti] = useState(13)
    return (
        <div className="dashboard">
            <div className="left">
                <h1>Monitor</h1>
                <p onClick={e => seti(0)} > <MdOutlineDashboard className='iconj' /> Dashboard</p>
                <p onClick={e => seti(1)}> <CgMediaLive className='iconj' /> Live Stream</p>
                <p onClick={e => seti(2)}><TbDeviceDesktopAnalytics className='iconj' /> Presence</p>
                
                <p onClick={e => seti(4)}> <AiTwotoneSecurityScan className='iconj' /> Productivity</p>
                <p onClick={e => seti(5)} > <FaUserAlt className='iconj' /> Users</p>
                <p onClick={e => seti(13)} > <FaUserAlt className='iconj' /> Jobsite</p>

                <p onClick={e => seti(6)}><FiCamera className='iconj'  /> Snapshots</p>
                <p onClick={e => seti(7)}><VscNote className='iconj' /> Applications</p>
                <p onClick={e => seti(8)}> <TbBriefcase className='iconj' /> Projects</p>
                <p  onClick={e => seti(9)}> <BiFileBlank className='iconj' />GPS Location</p>
                <p onClick={e => seti(11)}><AiOutlineMenuFold className='iconj' />Leave</p>
                <p onClick={e => seti(12)}> <BiFileBlank className='iconj' />Notes</p>
                <p onClick={e => seti(10)}><BsClockHistory className='iconj' />Reports</p>
                <p onClick={e=>logout()}><AiOutlineLogout className='iconj' />Logout</p>


            </div>
            <div className="right">
                {
                    i === 0 &&
                    <Dashboard />

                }{i === 1 &&
                    <Users />

                }
                {i === 2 &&
                    <Presence />

                }
                {i === 4 &&
                    <Prod />

                }{
                    i === 5 &&
                    <Emp />
                }
                {i===6&&
                <Snapshot />

                }
                  {i===7&&
                <Apps />

                }
                {i===8&&
                <Projects />

                }
                {i===9&&
                <Track />

                }
                  {i===10&&
                <Reports />

                }
                {i===11&&
                <Leave2 />

                }
                {i===12&&
                <Notes />
                

                }
                 {i===13&&
                <Jobsite />
                

                }


            </div>
        </div>
    )
}

export default Home