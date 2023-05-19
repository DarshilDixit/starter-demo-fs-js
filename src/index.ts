import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Joe krug';
  greetUser(name);
  document.body.style.backgroundColor = 'Green';
});
