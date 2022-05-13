import * as React from 'react'
import Layout from '../components/Layout/Layout'
import InfoCard from '../components/InfoCard/InfoCard'
import InfoCardDetails from '../components/InfoCardDetails/InfoCardDetails'

// markup
const IndexPage = () => {
    return <Layout>
        <InfoCard>
            <InfoCardDetails />
        </InfoCard>
    </Layout>
}

export default IndexPage
