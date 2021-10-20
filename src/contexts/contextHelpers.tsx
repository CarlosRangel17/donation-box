import { Context, useContext } from 'react'

export function contextHookFactory<P>(context: Context<P>, name: string) {
  return () => {
    const contextState = useContext(context)
    /* istanbul ignore if */
    if (typeof contextState === 'undefined') {
      throw new Error(`use${name} must be used within a ${name}Provider`)
    }

    return contextState
  }
}
