import Home from '@/components/CrazyOrbit/home'
import { CrazyOrbitIndex } from '@/components/CrazyOrbit/htmlFile'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: CrazyOrbitIndex
  ,
})
