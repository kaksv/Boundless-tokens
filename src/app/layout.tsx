import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StarknetProvider from '@components/starknet-provider'
import Favicon from '@public/favicon.ico'
import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'
import SideNav from '@components/ui/dashboard/sideNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Token bound Account Staking | Stake TBA Assets.',
  description: 'A place to stake your Token Bound Assets.',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <StarknetProvider>
          <body className={inter.className}>
            <Navbar />
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
              <div className="w-full flex-none md:w-64">
                <SideNav />
              </div>
              <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
              </div>
            </div>
            {/* <Footer /> */}
          </body>
        </StarknetProvider>
      </html>
    </>
  )
}
