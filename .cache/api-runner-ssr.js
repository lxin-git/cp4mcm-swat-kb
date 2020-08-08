var plugins = [{
      plugin: require('/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"IBM SWAT for MCM","short_name":"IBM SWAT for MCM","start_url":"/","background_color":"#ffffff","theme_color":"#0062ff","display":"browser"},
    },{
      plugin: require('/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-unwrap-images"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1152,"linkImagesToOriginal":false,"quality":75,"withWebp":false,"pngCompressionSpeed":4}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"}],"defaultLayouts":{"default":"/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-theme-carbon/src/templates/Default.js","home":"/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-theme-carbon/src/templates/Homepage.js"}},
    },{
      plugin: require('/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Carbon Design Gatsby Theme","short_name":"Gatsby Theme Carbon","start_url":"/","background_color":"#ffffff","theme_color":"#0f62fe","display":"browser","icon":"/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-theme-carbon/src/images/favicon.svg"},
    },{
      plugin: require('/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Mark/Documents/GitHub/cp4mcm-swat-kb/node_modules/gatsby-theme-carbon/gatsby-ssr'),
      options: {"plugins":[],"repository":{"baseUrl":"https://github.com/IBMIntegration/learn-cloudpakintegration-site","isSearchEnabled":true}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
