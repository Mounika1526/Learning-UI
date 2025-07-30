import Careers from '@/components/CrazyOrbit/Careers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/careers')({
  component: Careers,
})
