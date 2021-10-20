import { waitFor } from '@testing-library/react'

export const fireResize = async (width: number, height?: number) => {
  global.innerWidth = width
  global.innerHeight = height || width
  await waitFor(() => global.dispatchEvent(new Event('resize')))
}
