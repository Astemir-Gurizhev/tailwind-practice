import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { Part2 } from './Part2.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Part2 />
	</StrictMode>
)
