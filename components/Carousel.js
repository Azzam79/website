export default function carousel() {
  return (
    <>
      <div>
        <div ClassName='image-sliderfade fade'>
          <img src='img1.jpg' style='width:100%' />
          <div ClassName='text'>Image caption 1</div>
        </div>

        <div ClassName='image-sliderfade fade'>
          <img src='img2.jpg' style='width:100%' />
          <div ClassName='text'>Image caption 2</div>
        </div>

        <div ClassName='image-sliderfade fade'>
          <img src='img3.jpg' style='width:100%' />
          <div ClassName='text'>Image caption 3</div>
        </div>

        <div ClassName='image-sliderfade fade'>
          <img src='img3.jpg' style='width:100%' />
          <div ClassName='text'>Image caption 4</div>
        </div>
      </div>

      <div ClassName='text-align:center'>
        <span ClassName='dot'></span>
        <span ClassName='dot'></span>
        <span ClassName='dot'></span>
      </div>
    </>
  );
}
