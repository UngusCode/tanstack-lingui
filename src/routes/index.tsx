import { Trans } from "@lingui/react/macro"
import { } from "@tanstack/react-router"

export const Route = createFileRoute({
  component: Home
})

function Home() {
  return (
    <div className="p-2">
      <h3>
        <Trans>Welcome Home!!!</Trans>
      </h3>
    </div>
  )
}
