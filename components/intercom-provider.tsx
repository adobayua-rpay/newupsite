"use client"

import { useEffect } from "react"
import Intercom from "@intercom/messenger-js-sdk"

export default function IntercomProvider() {
  useEffect(() => {
    Intercom({
      app_id: "dbjhsk9x",
    })
  }, [])

  return null
}
