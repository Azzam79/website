import React from "react";

export default function corousel() {
  return (
    <div>
      <div ClassName='w-full carousel'>
        <div id='slide1' ClassName='relative w-full pt-20 carousel-item'>
          <img src='/banner1.png' />
          <div ClassName='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='/components/carousel#slide4' ClassName='btn btn-circle'>
              ❮
            </a>
            <a href='/components/carousel#slide2' ClassName='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' ClassName='relative w-full pt-20 carousel-item'>
          <img src='https://picsum.photos/id/501/800/300' ClassName='w-full' />
          <div ClassName='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='/components/carousel#slide1' ClassName='btn btn-circle'>
              ❮
            </a>
            <a href='/components/carousel#slide3' ClassName='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' ClassName='relative w-full pt-20 carousel-item'>
          <img src='https://picsum.photos/id/502/800/300' ClassName='w-full' />
          <div ClassName='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='/components/carousel#slide2' ClassName='btn btn-circle'>
              ❮
            </a>
            <a href='/components/carousel#slide4' ClassName='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' ClassName='relative w-full pt-20 carousel-item'>
          <img src='https://picsum.photos/id/503/800/300' ClassName='w-full' />
          <div ClassName='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='/components/carousel#slide3' ClassName='btn btn-circle'>
              ❮
            </a>
            <a href='/components/carousel#slide1' ClassName='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
