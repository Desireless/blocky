import SupabaseListener from './auth/supabase-listener';
import SupabaseProvider from './auth/supabase-provider';
import { createServerClient } from './auth/supabase-server';
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Blocky App',
  description: 'Encuentra el horario perfecto con Blocky',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();

  
  return (
    <html lang="en">
      <body className="min-h-screen">
      <SupabaseProvider session={session}>
      <SupabaseListener serverAccessToken={session?.access_token} />
        <nav className="block top-0 bg-[#9381FF] w-full h-14">
          <Navbar />
        </nav>
        <main className="px-8 py-6">
          {children}
        </main>
        </SupabaseProvider>
      </body>
    </html>
  )
}
