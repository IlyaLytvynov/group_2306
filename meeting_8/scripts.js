import { ParagraphPreview } from './oodDom.js';
const mountPoint = document.querySelector('body');

const articles = [
  {
    title: 'HEllo world',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus mollitia enim tempora, consectetur illum, ex dolorem nobis adipisci quia expedita. Ducimus natus reprehenderit cumque dolor adipisci, autem deleniti cum?',
  },
  {
    title: 'Test 2',
    text:
      'asdasdLorem, ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus mollitia enim tempora, consectetur illum, ex dolorem nobis adipisci quia expedita. Ducimus natus reprehenderit cumque dolor adipisci, autem deleniti cum?',
  },
  {
    title: 'Test 3',
    text:
      'asdasdLorem, ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus mollitia enim tempora, consectetur illum, ex dolorem nobis adipisci quia expedita. Ducimus natus reprehenderit cumque dolor adipisci, autem deleniti cum?',
  },
  {
    title: 'Test 4',
    text:
      'asdasdLorem, ipsum dasdasdolor sit amet consectetur adipisicing elit. Autem necessitatibus mollitia enim tempora, consectetur illum, ex dolorem nobis adipisci quia expedita. Ducimus natus reprehenderit cumque dolor adipisci, autem deleniti cum?',
  },
];
const body = document.querySelector('body');
for (let article of articles) {
  const feedItem = new ParagraphPreview(body, article.title, article.text);
  feedItem.render();
}
