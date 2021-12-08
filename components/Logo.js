import next from "next";
import Link from "next/link";
export default function Logo() {
  return (
    <div className='pb-1 md:pl-20 mx-2 flex-none'>
      <Link href='/'>
        <a>
          <img src='/logo-gyd-home.png' />
        </a>
      </Link>
    </div>
  );
}
