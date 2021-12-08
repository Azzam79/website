import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <div class='navbar mb-2 shadow-lg bg-primary text-neutral-content'>
        <div className='pb-1 md:pl-20 mx-2 flex-none'>
          <Link href='/'>
            <a>
              <img src='/logo-gyd-home.png' />
            </a>
          </Link>
        </div>

        <div class='flex justify-end flex-1 px-2 navbar-center'>
          <div class='items-stretch hidden lg:flex'>
            <div class='dropdown dropdown-end'>
              <div tabindex='0' class='btn btn-ghost rounded-btn'>
                Zakat
              </div>
              <ul
                tabindex='0'
                class='p-4 shadow menu dropdown-content bg-secondary rounded-box w-52'
              >
                <li>
                  <a>Zakat Pemberdayaan</a>
                </li>
                <li>
                  <a>Zakat Penghasilan</a>
                </li>
                <li>
                  <a>Zakat Pendidikan</a>
                </li>
                <li>
                  <a>Zakat Quran</a>
                </li>
                <li>
                  <a>Zakat Maal</a>
                </li>
                <li>
                  <a>Zakat di Akhir Tahun</a>
                </li>
                <li>
                  <a>Zakat Korban Bencana</a>
                </li>
                <li>
                  <a>Zakat Hasil Harta</a>
                </li>
                <li>
                  <a>Zakat Pertanian</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class='flex justify-end flex-2 px-2 navbar-center'>
          <div class='items-stretch hidden lg:flex'>
            <div class='dropdown dropdown-end'>
              <div tabindex='0' class='btn btn-ghost rounded-btn'>
                Layanan Kami
              </div>
              <ul
                tabindex='0'
                class='p-4 shadow menu dropdown-content bg-secondary rounded-box  w-52'
              >
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Cara Donasi</a>
                </li>
                <li>
                  <a>Scan Barcode</a>
                </li>
                <li>
                  <a>Kalkulator Zakat</a>
                </li>
                <li>
                  <a>Nomor Rekening</a>
                </li>
                <li>
                  <a>Kontak</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class='flex justify-end flex-2 px-2 navbar-center'>
          <div class='items-stretch hidden lg:flex'>
            <div class='dropdown dropdown-end'>
              <div tabindex='0' class='btn btn-ghost rounded-btn'>
                Tentang Kami
              </div>
              <ul
                tabindex='0'
                class='p-4 shadow menu dropdown-content bg-secondary rounded-box  w-52'
              >
                <li>
                  <a>Profil GYD</a>
                </li>
                <li>
                  <a>Legal</a>
                </li>
                <li>
                  <a>Laporan Keuangan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class='flex justify-end flex-2 px-2 navbar-center'>
          <div class='items-stretch hidden lg:flex'>
            <div class='dropdown dropdown-end'>
              <div tabindex='0' class='btn btn-ghost rounded-btn'>
                Lokasi Asrama
              </div>
            </div>
          </div>
        </div>

        <div class='flex justify-end flex-2 px-2 navbar-center'>
          <div class='items-stretch hidden lg:flex'>
            <div class='dropdown dropdown-end'>
              <div tabindex='0' class='btn btn-ghost rounded-btn'>
                Program
              </div>
              <ul
                tabindex='0'
                class='p-4 shadow menu dropdown-content bg-secondary rounded-box  w-52'
              >
                <li>
                  <a>Pendidikan</a>
                </li>
                <li>
                  <a>Kesehatan</a>
                </li>
                <li>
                  <a>Pemberdayaan</a>
                </li>
                <li>
                  <a>Sosial</a>
                </li>
                <li>
                  <a>Tokoh Agama</a>
                </li>
                <li>
                  <a>Wakaf</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class='navbar-end'>
          <button class='btn btn-square btn-ghost'></button>
          <button class='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              class='inline-block w-6 h-6 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
