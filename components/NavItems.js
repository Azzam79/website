export default function NavItems({ children }) {
  return (
    <div>
      <li>
        <a className='text-white text-opacity-60 font-semibold'>{children}</a>
      </li>
    </div>
  );
}
