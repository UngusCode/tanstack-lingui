import { Trans } from "@lingui/react/macro"
import { } from "@tanstack/react-router"

export const Route = createFileRoute({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return (
    <div>
      <Trans>Select a post.</Trans>
    </div>
  )
}
