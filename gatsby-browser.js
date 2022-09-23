import React from 'react'
import Layout from './src/components/layout'
import { GlobalProvider } from "./src/context/GlobalContext";


export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);