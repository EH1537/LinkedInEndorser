window.scrollTo(0, document.body.scrollHeight);
setTimeout(() => {
  if (document.querySelector('.pv-skills-section__additional-skills').getAttribute("aria-expanded") == 'false') {
    console.log("false")
    document.querySelector('.pv-skills-section__additional-skills').click();
  }
  console.log('what')
  setTimeout(() => {
    document.querySelectorAll('button.pv-skill-entity__featured-endorse-button-shared.artdeco-button').forEach((button) => {
      if (button.innerHTML.includes('plus-icon')) button.click();
    })
  }, 2000);
}, 2000);