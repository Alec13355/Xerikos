@description('Azure region for the Static Web App')
param location string = 'eastus2'

@description('App name used to derive resource names')
param appName string = 'xerikos'

@allowed(['Free', 'Standard'])
param sku string = 'Free'

resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: 'swa-${appName}'
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {}
}

output staticWebAppName string = staticWebApp.name
output defaultHostname string = staticWebApp.properties.defaultHostname
