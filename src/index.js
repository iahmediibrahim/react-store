import React from 'react'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<ProductsProvider>
		<App />
	</ProductsProvider>,
)
