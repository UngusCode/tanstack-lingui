import { Trans } from "@lingui/react/macro"
import { } from "@tanstack/react-router"

export const Route = createFileRoute(
  {
    component: LayoutBComponent,
  }
)

function LayoutBComponent() {
  return (
    <div>
      <Trans>I'm B!</Trans>
    </div>
  )
}
