export default function blog() {
  return (
    <div>
      <div ClassName='grid grid-cols-3 gap-4'>
        <div ClassName='card shadow-2xl card bordered'>
          <figure>
            <img src='/blog1.jpg' />
          </figure>
          <div ClassName='card-body'>
            <h2 ClassName='card-title'>
              Kisah Ibnu Hajar
              <div ClassName='badge mx-2 badge-secondary'>Sejarah</div>
            </h2>
            <div ClassName='card-actions'>
              <div ClassName='badge badge-primary'>12 November 2021</div>
            </div>
            <p>
              Donasiberkah.id Kisah Ibnu Hajar Al Asqalani, beliau adalah
              seorang anak yatim, Ayahnya meninggal pada saat beliau masih
              berumur 4 tahun dan ibunya meninggal ketika beliau masih balita.
            </p>
            <div ClassName='justify-end card-actions'>
              <button ClassName='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>

        <div ClassName='card shadow-2xl card bordered'>
          <figure>
            <img src='/blog2.jpg' />
          </figure>
          <div ClassName='card-body'>
            <h2 ClassName='card-title'>
              Keutamaan Belajar Bahasa Arab
              <div ClassName='badge mx-2 badge-secondary'>Blog</div>
            </h2>
            <div ClassName='card-actions'>
              <div ClassName='badge badge-primary'>12 November 2021</div>
            </div>
            <p>
              Donasiberkah.id- Alhamdulillah, adik-adik kita yang shalihah
              Asrama Pamulang berkesempatan belajar Bahasa Arab dengan Kaka
              Donatur yang berbaik hati, semoga ilmu yang telah diberikan
              menjadi amal jariyah yah ka, Aamiin.
            </p>
            <div ClassName='justify-end card-actions'>
              <button ClassName='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>

        <div ClassName='card shadow-2xl card bordered'>
          <figure>
            <img src='/blog3.jpg' />
          </figure>
          <div ClassName='card-body'>
            <h2 ClassName='card-title'>
              Menunaikan Zakat Tanpa Amil?
              <div ClassName='badge mx-2 badge-secondary'>Ziswaf</div>
            </h2>
            <div ClassName='card-actions'>
              <div ClassName='badge badge-primary'>12 November 2021</div>
            </div>
            <p>
              Donasiberkah.id- Artikel ini akan dimulai dari beberapa pertanyaan
              yaitu, Apakah masyarakat Muslim wajib menyalurkan zakatnya melalui
              Baznas (Amil)? Apa sebenarnya fungsi Baznas?
            </p>
            <div ClassName='justify-end card-actions'>
              <button ClassName='btn btn-primary'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
