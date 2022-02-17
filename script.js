const box = document.querySelector('.box');
box.addEventListener('click', function () {
  //   let satu = 'size';
  //   let dua = 'caption';

  //   if (this.dua.contains(satu)) {
  //     [satu, dua] = [dua, satu];
  //   }

  this.classList.toggle('size');
  setTimeout(() => {
    this.classList.toggle('caption');
  }, 600);
});
