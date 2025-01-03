/// <reference types="vinxi/types/client" />
// import '@shopify/polaris/build/esm/styles.css?url'
// import './client.css?url'

import { StartClient } from '@tanstack/start'
import { hydrateRoot } from 'react-dom/client'
import { createRouter } from './router'

const router = createRouter()

hydrateRoot(document, <StartClient router={router} />)
