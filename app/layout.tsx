import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReviewReply AI — Auto-respond to Google Reviews for Restaurants',
  description: 'Automatically generate personalized responses to Google reviews using your restaurant brand voice. Save time, boost reputation, and never miss a review.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="333eb541-6319-4f13-a6d6-86612b2436d4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
