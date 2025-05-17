import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import { lingui } from "@lingui/vite-plugin"

import react from "@vitejs/plugin-react";
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json']
    }),
    lingui(),
    tanstackStart({
      client: {
        entry: './client.tsx',
      },
      server: {
        entry: './server.ts',
      },
    }),
    
    react({
      babel: {
        plugins: ['@lingui/babel-plugin-lingui-macro']
      }
    })
  ]
})
