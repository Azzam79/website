import React from "react";

export default function Blog() {
  return (
    <div>
      <div class='grid grid-cols-3 gap-4'>
        <div class='card shadow-2xl card bordered'>
          <figure>
            <img src='/blog1.jpg' />
          </figure>
          <div class='card-body'>
            <h2 class='card-title'>
              Kisah Ibnu Hajar
              <div class='badge mx-2 badge-secondary'>Sejarah</div>
            </h2>
            <div class='card-actions'>
              <div class='badge badge-primary'>12 November 2021</div>
            </div>
            <p>
              Donasiberkah.id Kisah Ibnu Hajar Al Asqalani, beliau adalah
              seorang anak yatim, Ayahnya meninggal pada saat beliau masih
              berumur 4 tahun dan ibunya meninggal ketika beliau masih balita.
            </p>
            <div class='justify-end card-actions'>
              <button class='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>

        <div class='card shadow-2xl card bordered'>
          <figure>
            <img src='/blog2.jpg' />
          </figure>
          <div class='card-body'>
            <h2 class='card-title'>
              Keutamaan Belajar Bahasa Arab
              <div class='badge mx-2 badge-secondary'>Blog</div>
            </h2>
            <div class='card-actions'>
              <div class='badge badge-primary'>12 November 2021</div>
            </div>
            <p>
              Donasiberkah.id- Alhamdulillah, adik-adik kita yang shalihah
              Asrama Pamulang berkesempatan belajar Bahasa Arab dengan Kaka
              Donatur yang berbaik hati, semoga ilmu yang telah diberikan
              menjadi amal jariyah yah ka, Aamiin.
            </p>
            <div class='justify-end card-actions'>
              <button class='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>

        <div class='card shadow-2xl card bordered'>
          <figure>
            <img src='/blog3.jpg' />
          </figure>
          <div class='card-body'>
            <h2 class='card-title'>
              Menunaikan Zakat Tanpa Amil?
              <div class='badge mx-2 badge-secondary'>Ziswaf</div>
            </h2>
            <div class='card-actions'>
              <div class='badge badge-primary'>12 November 2021</div>
            </div>
            <p>
              Donasiberkah.id- Artikel ini akan dimulai dari beberapa pertanyaan
              yaitu, Apakah masyarakat Muslim wajib menyalurkan zakatnya melalui
              Baznas (Amil)? Apa sebenarnya fungsi Baznas?
            </p>
            <div class='justify-end card-actions'>
              <button class='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div class='btn-group justify-center'>
        <button class='btn btn-primary btn-wide'>Previous Page</button>
        <button class='btn btn-secondary btn-wide'>Next Page</button>
      </div>
    </div>
  );
}
