import React from 'react';
import { Application } from '@pluginio/sdk';

let app = new Application()
export const Plugin = React.createContext<Application>(app)

export function PluginProvider({children}: any)
{
  const [application] = React.useState<Application>(app)

  return <Plugin.Provider value={application}>{children}</Plugin.Provider>
}

export function usePlugin()
{
  const context = React.useContext(Plugin)
  if(context === undefined)
  {
    throw new Error("usePlugin must be used within a PluginProvider.")
  }
  return context
}
