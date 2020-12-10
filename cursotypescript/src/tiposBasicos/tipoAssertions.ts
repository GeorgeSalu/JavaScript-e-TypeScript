// recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'quaquer coisa';
input.focus();

// não recomendado
// type assertion
const body4 = (document.querySelector('body') as unknown) as number;

// non-null assertion (!)
const body = document.querySelector('body')!;
body.style.background = 'red';
