import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./style.css"

const RightSidebar = () => {
  return (
    <>
        <div className='right_side_bar my-2 p-4'>
            <div>
                <h5>Recommended For You</h5> 
                <div><ChevronRightIcon /></div>
                <hr />
            </div> 
        </div>    
    </>
  )
}

export default RightSidebar