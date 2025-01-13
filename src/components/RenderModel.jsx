import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import clsx from 'clsx'

const RenderModel = ({children, className}) => {
  return (
    <Canvas
    className={clsx("w-screen h-screen relative", className)}>
        <Suspense fallback={null}>
            {children}
        </Suspense>
    </Canvas>
  )
}

export default RenderModel