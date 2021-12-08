import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Stat from "../components/Stat";
export default function Home() {
  return (
    <>
      <div className='bg-primary'>
        <div className='container mx-auto'>
          <div className='flex items-center'>
            <div className='w-3/12'>
              <Logo />
            </div>
            <div className='w-6/12'>
              <Nav />
            </div>
            <div className='w-3/12'>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <section className='py-28'>
        <div className='container mx-auto'>
          <Stat />
        </div>
      </section>
      <section className='py-5'>
        <div className='container mx-auto'>
          <Blog />
        </div>
      </section>
      <section className='py-28' />
      <Footer />
    </>
  );
}
