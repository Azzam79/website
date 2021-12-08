import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Griya Yatim & Dhuafa</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className='drawer'>
        <input id='main-menu' type='checkbox' className='drawer-toggle' />
        <main className='md:px-20 md:py-3 drawer-content'>
          <div className='navbar sticky top-0 z-50 bg-primary text-primary-content md:rounded-box'>
            <div className='pb-1 md:pl-20 mx-2 flex-none'>
              <Link href='/'>
                <a>
                  <img src='/logo-gyd-home.png' />
                </a>
              </Link>
            </div>

            <div className='flex-1 px-2 mx-2'>
              <div className='hidden lg:flex'>
                <Link href='/category/donasi'>
                  <a className='btn btn-ghost btn-sm rounded-btn'>Donasi</a>
                </Link>
                <Link href='/category/zakat'>
                  <a className='btn btn-ghost btn-sm rounded-btn'>Zakat</a>
                </Link>
                <Link href='/category/wakaf'>
                  <a className='btn btn-ghost btn-sm rounded-btn'>Wakaf</a>
                </Link>
              </div>
            </div>

            <div className='navbar-end'>
              <label
                htmlFor='main-menu'
                className='btn btn-square btn-ghost lg:hidden'
              >
                <i className='fas fa-bars fa-lg' />
              </label>
            </div>
          </div>
          {children}
        </main>
        <div className='drawer-side md:hidden'>
          <label htmlFor='main-menu' className='drawer-overlay'></label>
          <ul className='menu p-5 overflow-y-auto w-80 bg-base-100 text-primary text-sm'>
            <li className='text-base text-base-300'>
              <strong>Menu</strong>
            </li>
            <li>
              <Link href='/category/donasi'>
                <a>
                  <strong>Donasi</strong>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/category/zakat'>
                <a>
                  <strong>Zakat</strong>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/category/wakaf'>
                <a>
                  <strong>Wakaf</strong>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Layout;
