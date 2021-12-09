export default function carousel() {
  return (
    <>
      <div>
        <div className='image-sliderfade fade'>
          <img src='img1.jpg' style='width:100%' />
          <div className='text'>Image caption 1</div>
        </div>

        <div className='image-sliderfade fade'>
          <img src='img2.jpg' style='width:100%' />
          <div className='text'>Image caption 2</div>
        </div>

        <div className='image-sliderfade fade'>
          <img src='img3.jpg' style='width:100%' />
          <div className='text'>Image caption 3</div>
        </div>

        <div className='image-sliderfade fade'>
          <img src='img3.jpg' style='width:100%' />
          <div className='text'>Image caption 4</div>
        </div>
      </div>

      <div className='text-align:center'>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>
    </>
  );
}
