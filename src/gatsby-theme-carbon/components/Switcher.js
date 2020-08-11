import React from 'react'
import Switcher from 'gatsby-theme-carbon/src/components/Switcher'
import {
  SwitcherLink,
  SwitcherDivider,
} from 'gatsby-theme-carbon/src/components/Switcher/Switcher'

const CustomSwitcher = props => {
  console.log('Props:', JSON.stringify(props))

  return (
    <Switcher {...props}>
      <SwitcherDivider>GitHub</SwitcherDivider>
      <SwitcherLink href="https://github.com/IBMIntegration/cp4mcm-swat-kb" target="_blank">
        SWAT MCM Github
      </SwitcherLink>
      
      <SwitcherDivider>Useful Links</SwitcherDivider>
      <SwitcherLink
        href="https://www.ibm.com/cloud"
        target="_blank"
      >
        IBM Cloud Homepage
      </SwitcherLink>
      
      <SwitcherLink
        href="https://www.ibm.com/support/knowledgecenter/"
        target="_blank"
      >
        IBM Knowledge Center
      </SwitcherLink>
    </Switcher>
  )
}

export default CustomSwitcher
