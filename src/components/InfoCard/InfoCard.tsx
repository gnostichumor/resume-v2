import React from 'react'
import * as styles from './infocard.module.css'

type Props = {
    children: JSX.Element
}

const InfoCard = ({ children }: Props) => {
    return <div>{children}</div>
}

export default InfoCard
