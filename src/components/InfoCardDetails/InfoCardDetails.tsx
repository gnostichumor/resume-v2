import React from 'react'
import * as styles from './infocarddetails.module.css'



const InfoCardDetails = () => {
    return (
        <div className={styles.cardDetails}>
            <div className={styles.cardDetailsHeadingBlock}>
                <h1 className={styles.cardDetailsHeading}>Product Manager</h1>
                <h2 className={styles.cardDetailsSubHeading}>Printforia</h2>
            </div>
            <p className={styles.cardDetailsParagraph}>01-01-2021</p>
            <ul className={styles.cardDetailsList}>
                <li className={styles.cardDetailsListItem}>Collaborated with the Chief Data Officer, VP of Technology and Chief Operations Officer to deliver growth, analytics and production process products.</li>
                <li className={styles.cardDetailsListItem}>Launched an internal invoicing and payment tracking service using REST API and custom RDBS which saved the accounting department 20 hours per month by removing Excel-based process dependencies. </li>
                <li className={styles.cardDetailsListItem}>Utilized data-driven insights to design and implement in-house and B2B facing software solutions resulting in a 20% increase in SLA compliance and a 35% increase of in-stock rates.</li>
                <li className={styles.cardDetailsListItem}>Partnered closely with cross-functional teams across multiple time zones to execute and maintain complex SaaS products. Led stand ups and sprints, triaged bugs and provided project updates to key stakeholders in the organization.</li>
            </ul>
        </div>)
}



export default InfoCardDetails;