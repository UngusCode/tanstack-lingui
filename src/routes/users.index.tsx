import { } from '@tanstack/react-router'
import { Trans } from "@lingui/react/macro"
import { } from "@tanstack/react-router"

export const Route = createFileRoute({
  component: UsersIndexComponent,
})

function UsersIndexComponent() {
  return (
    <div>
      <Trans>Select a user.</Trans>
    </div>
  )
}
