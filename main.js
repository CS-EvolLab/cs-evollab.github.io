const query = document.querySelector('#query');
const year = document.querySelector('#year');
const papers = [...document.querySelectorAll('.paper')];
function filterPapers() {
  const terms = query.value.toLowerCase().trim().split(/\s+/);
  let visible = 0;
  for (const paper of papers) {
    const content = paper.textContent.toLowerCase();
    paper.hidden = (year.value && paper.dataset.year !== year.value) || !terms.every(term => content.includes(term));
    if (!paper.hidden) visible += 1;
  }
  const count = document.querySelector('#count');
  if (document.documentElement.lang === 'zh-CN') {
    count.textContent = visible ? visible + ' 项成果' : '未找到匹配的成果';
  } else {
    count.textContent = visible ? visible + (visible === 1 ? ' work' : ' works') : 'No matching works';
  }
}
query.addEventListener('input', filterPapers);
year.addEventListener('change', filterPapers);
