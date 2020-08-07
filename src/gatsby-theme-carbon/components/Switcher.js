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
      <SwitcherLink href="https://github.com/IBMIntegration" target="_blank">
        IBM Integration Github
      </SwitcherLink>
      <SwitcherLink
        href="https://github.ibm.com/client-technical-engineering"
        target="_blank"
      >
        IBM CTE GitHub
      </SwitcherLink>
      <SwitcherDivider>Useful Tools</SwitcherDivider>
      <SwitcherLink
        href="https://www.ibm.com/cloud/architecture/architectures/"
        target="_blank"
      >
        IBM Cloud Garage Architectures Site
      </SwitcherLink>
    </Switcher>
  )
}

export default CustomSwitcher
