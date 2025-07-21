// ANCHOR: homepage-main - Les Momes restaurant homepage
import Header from './components/Header'
import Menu from './components/Menu'
import InstagramFeed from './components/InstagramFeed'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'
import { EditProvider } from './contexts/EditContext'

export default function Home() {
  return (
    <EditProvider>
      <div className="min-h-screen" style={{backgroundColor: '#f2f2f2'}}>
        <Header />
        <div className="pt-20">
          <Menu />
          <ReservationSection />
          <InstagramFeed />
          <Footer />
        </div>
      </div>
    </EditProvider>
  );
}
