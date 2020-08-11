import React from 'react'
import {HomepageBanner, HomepageCallout} from 'gatsby-theme-carbon'
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage'
import {calloutLink} from './Homepage.module.scss'
import {StaticQuery, graphql} from 'gatsby'
import Carbon from '../../images/carbon.jpg'

// Import site title from gatsby-config to use as header

const SiteTitle = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => data.site.siteMetadata.title}
    />
  )
}

const BannerText = () => {
  return (
    <div style={{paddingBottom: 100}}>
      <SiteTitle />
    </div>
  )
}

const FirstLeftText = () => <p>Multi Cloud Manager</p>

const FirstRightText = () => (
  <p>
    Guides and assets created by IBM's Cloud SWAT team for Multi-Cloud-Manager (MCM)
    {/* <a className={calloutLink} href="/Multi-Cloud-Manager">
      Learn more →
    </a> */}
  </p>
)

const SecondLeftText = () => <p> </p>

const SecondRightText = () => (
  <p>
    {/* Guides and assets created by IBM's SWAT team for ICAM
    <a className={calloutLink} href="/ICAM">
      Learn more →
    </a> */}
  </p>
)

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#404040"
    />
  ),
}

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />
}

export default ShadowedHomepage
