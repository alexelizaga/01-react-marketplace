declare const window: any;

export const sendMessage = (message: {} , url = '*') => {
  console.log(message);
  if(window.parent) window.parent.postMessage(message, url);
  if(window.AndroidApp) window.AndroidApp.postMessage(JSON.stringify(message));
  if(window.webkit) window.webkit.messageHandlers.IOSApp.postMessage(JSON.stringify(message));
};
