import React, { FunctionComponent, createContext, useEffect, useState } from 'react'
import { contextHookFactory } from './contextHelpers'

const WindowDimensionsCtx = createContext({
  innerWidth: 0,
  innerHeight: 0
})

const WindowDimensionsProvider: FunctionComponent = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    innerWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    innerHeight: typeof window !== 'undefined' ? window.innerHeight : 0
  })
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setDimensions({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    })
  }, [dimensions.innerWidth])

  return <WindowDimensionsCtx.Provider value={dimensions}>{children}</WindowDimensionsCtx.Provider>
}

export default WindowDimensionsProvider
export const useWindowDimensions = contextHookFactory(WindowDimensionsCtx, 'WindowDimensionsCtx')
