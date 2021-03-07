export function elm(tag, ...classes) {
  const elm = document.createElement(tag ?? 'div');
  classes.forEach((cssClass) => elm.classList.add(cssClass));
  return elm;
}
