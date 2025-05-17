import {
  EventHandlerRequest,
  getHeaders,
  getWebRequest,
  H3Event,
  setHeader,
} from "@tanstack/react-start/server"
import { parse, serialize } from "cookie-es"

import { defaultLocale, dynamicActivate, isLocaleValid } from "./i18n"

function getLocaleFromRequest(event: H3Event<EventHandlerRequest>) {
  const request = getWebRequest(event)
  const headers = getHeaders(event)
  const cookie = parse(headers.cookie ?? "")

  if (request) {
    const url = new URL(request.url)
    const queryLocale = url.searchParams.get("locale") ?? ""

    if (isLocaleValid(queryLocale)) {
      setHeader(
        "Set-Cookie",
        serialize("locale", queryLocale, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        })
      )

      return queryLocale
    }
  }

  if (cookie.locale && isLocaleValid(cookie.locale)) {
    return cookie.locale
  }

  setHeader(
    "Set-Cookie",
    serialize("locale", defaultLocale, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })
  )

  return defaultLocale
}

export async function setupLocaleFromRequest(
  event: H3Event<EventHandlerRequest>
) {
  await dynamicActivate(getLocaleFromRequest(event))
}
