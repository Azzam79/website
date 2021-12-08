import NavItems from "../components/NavItems";
export default function Nav() {
  return (
    <div>
      <ul className='flex justify-center space-x-10 py-10'>
        <NavItems>Zakat</NavItems>
        <NavItems>Layanan Kami</NavItems>
        <NavItems>Tentang Kami</NavItems>
        <NavItems>Lokasi Asrama</NavItems>
        <NavItems>Program</NavItems>
      </ul>
    </div>
  );
}
