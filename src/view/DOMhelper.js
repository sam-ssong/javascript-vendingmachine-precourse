export const $ = (selector, target = document) => target.querySelector(selector);

export const $$ = (selectors) => document.querySelectorAll(selectors);
