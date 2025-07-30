import OurProjects from '@/components/CrazyOrbit/OurProjects'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: OurProjects,
})

