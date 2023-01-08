import React, { useState } from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import axios from 'axios'
import { useEffect } from 'react'
import { tz } from '../../apis'
const Siteemp = () => {

const [adduser, setadduser] = useState('adduser2')
const [i, seti] = useState(0)
const [taxes, settaxes] = useState('taxes')
const [circle, setcircle] = useState('circle')
const [is, setis] = useState(0)


const [taxes2, settaxes2] = useState('taxes')
const [circle2, setcircle2] = useState('circle')
const [is2, setis2] = useState(0)
const [data, setdata] = useState()
useEffect(() => {
  axios.get(`${tz}/siteuser/getall`).then(res=>{
    console.log(res)
    setdata(res.data.Siteuserd)
  })

  return () => {
    
  }
}, [])

function req() {
    axios.post(`${tz}/siteuser/add`,{
        name:name,
        nc:nc,
        taxes:taxas,
        skill:skill,
        payrate:pr,
        otpayrate:otpr,
        jobn:jobn
    }).then(res=>{  
        axios.get(`${tz}/siteuser/getall`).then(res=>{
            console.log(res)
            setdata(res.data.Siteuserd)
            setadduser('adduser2')
          })
    })
    
}

function turnon() {
    if(is===0){
        settaxas('yes')

        setcircle('circle2')
        settaxes('taxes2')
        setis(1)
    }
    else{
        
        settaxas('no')

        setcircle('circle')
        settaxes('taxes')
        setis(0)
    }
    
}
function turnon2() {
    if(is2===0){
        setnc('4')

        setcircle2('circle2')
        settaxes2('taxes2')
        setis2(1)
    }
    else{
        
        setcircle2('circle')
        settaxes2('taxes')
        setis2(0)
        
        setnc('no')
    }
    
}

const [name, setname] = useState('')
const [skill, setskill] = useState('')
const [jobn, setjobn] = useState('')
const [nc, setnc] = useState('')
const [taxas, settaxas] = useState('')
const [pr, setpr] = useState('')
const [otpr, setotpr] = useState('')

  return (
    <>
    {i===0&&
<>
<div className={adduser}>
            <div className="subadduser">
              
              <>
                <div className="inputname">
                    <h1>Name</h1>
                    <input onChange={e=>setname(e.target.value)}  type="text" />

                </div>
                <div className="inputname">
                    <h1>Job number</h1>
                    <input  type="text" onChange={e=>setjobn(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>Skill</h1>
                    <input   type="text" onChange={e=>setskill(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>Pay rate (per/hr)</h1>
                    <input   type="text" onChange={e=>setpr(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>OT Pay rate (per/hr)</h1>
                    <input   type="text" onChange={e=>setotpr(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>Taxes:  </h1>
                    <div className={taxes} onClick={e=>turnon()}>
                        <div className={circle}>

                        </div>
                    </div>

                </div>
                <div className="inputname">
                    <h1>NC (4%):  </h1>
                    <div className={taxes2} onClick={e=>turnon2()}>
                        <div className={circle2}>

                        </div>
                    </div>

                </div>
                
                <button onClick={e=>req()}  className='btn1'>Submit</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>

              </>

              


            </div>

        </div>
</>

}
    <div className="sitemap">
         <div className="prodiheader">

<GiEnergyArrow className='ene' />
<h1>Site Employees</h1>
<button className='addemp' onClick={e=>setadduser('adduser')} >+ Add Employee</button>




</div>
<div className="tablerow">
              <div className="subtable">
              <div className="headertable clop">
                    <h1>Employee</h1>
                    <h2>Job no</h2>
                    
                    <h6>Skill</h6>
                    <h3>Taxes</h3>
                    <h4>Pay rate</h4>
                    <h5>OT Pay rate</h5>
                    <h5>NC(%)</h5>


                </div>
                {data&&data.map(val=>(
                    <>
                     <div className="headertable">
                    <h1><img src='' alt="" className='valimg' /> {val.name}</h1>
                    <h2>{val.jobn}</h2>
                    
                    <h6>{val.skill}</h6>
                    <h3>{val.taxes}</h3>
                    <h4>{val.payrate}</h4>
                    <h5>{val.otpayrate}</h5>
                    {
                        val.nc!=='no'?

                        <h5>{val.nc}%</h5>
                        :

                        <h5>NO</h5>
                    }


                </div>
                    </>
                ))

                }
              </div>
            </div>

    </div></>
  )
}

export default Siteemp