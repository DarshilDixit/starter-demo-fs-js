import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Darshil Dixit';
  greetUser(name);
  document.body.style.backgroundColor = 'Green';
});
