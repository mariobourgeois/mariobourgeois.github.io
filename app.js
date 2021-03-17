const wipe = document.querySelector('.wipe-transition');
const TLAnim = new TimelineMax();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

barba.init({

  sync: true,

  transitions: [
    {
      async leave(){

        const done = this.async();

        TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

        await delay(1500);
        done();

      },
      enter(){

        TLAnim
        .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
        .set(wipe, {left: '-100%'})
      }
    }
  ]

})