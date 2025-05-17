import { } from '@tanstack/react-router'
import { Trans } from "@lingui/react/macro"
import { } from "@tanstack/react-router"

export const Route = createFileRoute(
  {
    component: LayoutAComponent,
  }
)

function LayoutAComponent() {
  return (
    <div>
      <Trans>I'm A!</Trans>
    </div>
  )
}
