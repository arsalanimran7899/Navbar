import React from 'react'
import './Sidebar.css'

function SideBar() {
    return (
      
                <div class="navigation">
        <ul>
            <li>
                <a href="">
                <span class="icon"><img src="./home.svg" alt="" /></span>
                <span class="title" style={{color:'#E71583'}}>Home</span>
            </a>
        </li>
        <li>
            <a href="">
            <span class="icon"><img src="./setting.svg" alt="" /></span>
            <span class="title">Setting</span>
        </a>
    </li>
    <li>
        <a href="">
        <span class="icon"><img src="./logout.svg" alt="" /></span>
        <span class="title">Logout</span>
    </a>
</li>
          
        </ul>
    </div>
   
    );
}

export default SideBar
