import ReactDOM from 'react-dom'
import React from 'react'
import Layout1 from './components/layouts/Layout1'
import SideBar from './components/sidebars/SideBar'
import NavBar from './components/navBars/NavBar'
import Grid12 from './components/main/Grid12'

let app = document.querySelector('#app');

ReactDOM.render(
<Layout1>
    <NavBar></NavBar>
    <SideBar></SideBar>
    <Grid12></Grid12>
</Layout1>
, app);