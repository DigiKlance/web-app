'use client'

import { ThemeProvider } from '@/components/ui/theme-provider'
import { selectTheme, useSelector } from '@/lib/redux'

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useSelector(selectTheme)
  return (
    <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
