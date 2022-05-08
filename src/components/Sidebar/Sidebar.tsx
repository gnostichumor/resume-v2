import React from 'react'
import { Link } from 'gatsby'
import * as styles from './sidebar.module.css'

const sidebarLinks = [
 {
  title: 'Work History',
  url: '/WorkHistory',
 },
 {
  title: 'Education',
  url: '/Education',
 },
 {
  title: "What I'm Reading",
  url: '/Reading',
 },
 {
  title: "What I'm Learning",
  url: '/Learning',
 },
 {
  title: 'Technology',
  url: '/Technology',
 },
]

const Sidebar = () => {

 const openNav = () => {
  document.getElementById('mySidenav')!.style.width = '250px'
  document.getElementById('main')!.style.marginLeft = '250px'
  const links = document.querySelectorAll('.sidebar-links')
  links.forEach(link => {
    link.style.display = 'block';
    link.style.opacity = 0;
    setTimeout(()=> {
      link.style.opacity = 1
    }, 500)
  })
  // links.forEach(link => (link).style.opacity = '1')
 }

 /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 const closeNav = () => {
  document.getElementById('mySidenav')!.style.width = '0'
  document.getElementById('main')!.style.marginLeft = '0'
  const links = document.querySelectorAll('.sidebar-links')
  links.forEach(link => link.style.display = 'none')
 }
 return (
  <>
   <div id="mySidenav" className={styles.sidenav}>
    <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}>
     &times;
    </a>
    {sidebarLinks.map((link) => <Link className="sidebar-links" to={link.url}>{link.title}</Link>)}
   </div>
   
   <button className={styles.openbtn} onClick={openNav}>
    Open
   </button>
  </>
 )
}

export default Sidebar
