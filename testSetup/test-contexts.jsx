import React from 'react'
import { render } from '@testing-library/react'
import WindowDimensionsProvider from '~contexts/window-dimensions'

const Wrapper = ({ children }) => <WindowDimensionsProvider>{children}</WindowDimensionsProvider>

const customRender = (ui, options = {}) => render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
