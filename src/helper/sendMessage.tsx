declare const window: any;

export const sendMessage = (message: {} , url = '*') => {
  const msg: string = JSON.stringify(message);
  console.log(msg);
  if(window.parent) window.parent.postMessage(msg, url);
  if(window.AndroidApp) window.AndroidApp.postMessage(msg);
  if(window.webkit) window.webkit.messageHandlers.IOSApp.postMessage(msg);
};
