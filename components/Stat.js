import React from "react";

export default function Stat() {
  return (
    <div>
      <div class='w-full shadow stats'>
        <div class='stat'>
          <div class='stat-figure text-primary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              class='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              ></path>
            </svg>
          </div>
          <div class='stat-title'>Total Donasi</div>
          <div class='stat-value text-primary'>Rp. 5.486.983.585</div>
          <div class='stat-desc'>Terkumpul</div>
        </div>
        <div class='stat'>
          <div class='stat-figure text-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              class='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              ></path>
            </svg>
          </div>
          <div class='stat-title'>Donatur</div>
          <div class='stat-value text-info'>23.636</div>
          <div class='stat-desc'>Berpartisipasi</div>
        </div>
        <div class='stat'>
          <div class='stat-figure text-info'>
            <div class='avatar online'>
              <div class='w-16 h-16 p-1 mask mask-squircle bg-base-100'>
                <img
                  src='/iconGYD.png'
                  alt='Avatar Tailwind CSS Component'
                  class='mask mask-squircle'
                />
              </div>
            </div>
          </div>
          <div class='stat-value'>73</div>
          <div class='stat-title'>Program</div>
          <div class='stat-desc text-info'>Lihat Program</div>
        </div>
      </div>
    </div>
  );
}
