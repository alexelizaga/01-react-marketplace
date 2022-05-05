export const sendMessage = (message: {} , url = '*') => {
  console.log(message);
  window.parent.postMessage(message, url);
}
