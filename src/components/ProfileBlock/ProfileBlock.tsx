import React from 'react'
import Layout from '../Layout/Layout'
import ProfileHeaderBlock from "../ProfileHeaderBlock/ProfileHeaderBlock";
import ProfileDescriptionBlock from '../ProfileDescriptionBlock/ProfileDescriptionBlock';

const ProfileBlock = () => {
  return (
    <Layout>
      <div className='profile-block'>ProfileBlock
        <ProfileHeaderBlock />
        <ProfileDescriptionBlock />
      </div>
    </Layout>

  )
}

export default ProfileBlock