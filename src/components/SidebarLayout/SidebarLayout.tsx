import React from 'react'
import * as styles from "sidebarlayout.module.css"


type Props = {
  children: JSX.Element;
};

const SidebarLayout = ({children}: Props) => {


  return (
    <div className={styles.sidebarlayout}>{children}</div>
  )
}

export default SidebarLayout