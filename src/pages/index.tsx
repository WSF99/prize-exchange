import { Header } from '@/components/Header'
import { Items } from '@/components/Items'
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-400">
      <title>Prize Exchange</title>
      <Header />
      <main className="flex flex-col">
        <Items />
      </main>
    </div>
  )
}
