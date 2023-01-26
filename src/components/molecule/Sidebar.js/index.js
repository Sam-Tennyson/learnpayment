import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setActiveTab } from '../../../Redux/Actions/Dashboard'
import { SIDEBAR_CONSTANT } from '../../../Shared/Constants'
import './style.css'

const Sidebar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const activeTabReducer = useSelector((state) => state?.dashboard?.active_tab)

	const [activeTab, setActive] =useState("")

	useEffect(()=> {
		if (activeTabReducer && activeTabReducer != activeTab) {
		setActive(activeTabReducer)
		return;
		}
	}, [activeTabReducer])

	const handleClick = (e) => {
		dispatch(setActiveTab(e))
		navigate(e?.path)
	}

	return (
    <>
        <div className='sidebar my-2'>
          <ul className="side-menu list-unstyled" id="side-main-menu">
            {SIDEBAR_CONSTANT.map((item, index) => (
              <li key={index} className={` py-3 ${activeTab?.name === item?.name ? "active" : null}`} onClick={() => handleClick(item)}>
                <a>
                  <i className="menu-icon">
                    {item?.image}
                  </i>
                  {item?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>    
    </>
  )
}

export default Sidebar