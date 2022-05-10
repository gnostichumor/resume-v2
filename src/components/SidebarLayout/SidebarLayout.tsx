import React from 'react'
import * as styles from "sidebarlayout.module.css"

//Reference page
//https://allenhwkim.medium.com/mobile-friendly-sidebar-in-few-minutes-7817b5c5239f


type Props = {
    children: JSX.Element;
};

const SidebarLayout = ({ children }: Props) => {


    const sidebar = document.querySelector<HTMLElement>('.sidebar');

    sidebar!.querySelector<HTMLElement>('.blocker')!.onclick = hide;

    function show() { // swipe right
        sidebar!.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function hide() { // by blocker click, swipe left, or url change
        sidebar!.classList.remove('visible');
        document.body.style.overflow = '';
    }

    function toggle() {
        sidebar!.classList.contains('visible') ? hide() : show();
    }


    return (
        <div className="sidebar">
            <div className="blocker"></div>
            <div className="content">
                Sidebar Content
            </div>
        </div>
    )
}

export default SidebarLayout