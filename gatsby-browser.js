
// Libraries
import React from 'react'

// Styles
import './src/scss/style.scss'

// Context
import { SignUpModalContextProvider } from './src/contexts/SignUpModal'

// Leave calling card in console
console.log(`

______ _          _     ___  ___      _   _            
| ___ (_)        | |    |  \\/  |     | | | |           
| |_/ /___  _____| |___ | .  . | __ _| |_| |_ ___ _ __ 
|  __/| \\ \\/ / _ \\ / __|| |\\/| |/ _\` | __| __/ _ \\ '__|
| |   | |>  <  __/ \\__ \\| |  | | (_| | |_| ||  __/ |   
\\_|   |_/_/\\_\\___|_|___/\\_|  |_/\\__,_|\\__|\\__\\___|_|   


Like our code? Get in touch!
hello@pixelsmatter.io                                                       
                                                       
`)

// Wrap app with context
export const wrapRootElement = ({ element }) => (
	<SignUpModalContextProvider>
		{element}
	</SignUpModalContextProvider>
)