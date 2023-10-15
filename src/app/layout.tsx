import { Inter } from 'next/font/google'
import './css/globals.scss';
import Nav from "./components/nav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
