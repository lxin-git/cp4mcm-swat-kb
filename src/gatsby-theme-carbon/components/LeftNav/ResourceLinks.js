import React from 'react'
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks'

const links = [
  {
    title: 'IBM MCM SWAT Github',
    href: 'https://github.com/IBMIntegration/cp4mcm-swat-kb',
  },
  {
    title: 'IBM Knowledge Center',
    href: 'https://www.ibm.com/support/knowledgecenter/en',
  },
]

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />

export default CustomResources
