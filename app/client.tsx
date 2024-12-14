import { StartClient } from '@tanstack/start'
import { createRouter } from './router'
// app/client.tsx
/// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'react-dom/client'

const router = createRouter()

hydrateRoot(document, <StartClient router={router} />)
