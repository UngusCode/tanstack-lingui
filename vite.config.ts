import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import { lingui } from "@lingui/vite-plugin"
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from "@vitejs/plugin-react";
import path from 'path';
export default defineConfig({
  server: {
    port: 3000,
    
  },
  plugins: [tsConfigPaths({
    projects: ['./tsconfig.json'],
  }), lingui(), tanstackStart({
    client: {
      entry: './client.tsx',
    },
    server: {
      entry: './ssr.tsx',
      
    },
  }), react({
    babel: {
      plugins: ['@lingui/babel-plugin-lingui-macro'],
    },
  })],
})
