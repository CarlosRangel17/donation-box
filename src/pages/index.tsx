import React from 'react'
import { NextPage } from 'next'
import Layout from '~components/Layout'
import LandingPage from '~components/LandingPage'

const Home: NextPage = () => (
  <Layout>
    <LandingPage />
  </Layout>
)

export default Home
