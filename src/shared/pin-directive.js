// function applyStyle(element, binding) {
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });
//   element.style.position = 'absolute';
// }

// export default {
// the element is the sales span-tag in this example..
// bind: (element, binding) => {
// element.style.position = 'absolute';
// element.style.bottom = '5px';
// element.style.right = '5px';

// 1. with binding/arg/modifiers:
// console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
// if (binding.arg !== 'position') return;
// Object.keys(binding.modifiers).forEach((key) => {
//   element.style[key] = '5px';
// });
// element.style.position = 'absolute';

// 2. with object sent in:
// Object.keys(binding.value).forEach((position) => {
//   element.style[position] = binding.value[position];
// });
// element.style.position = 'absolute';

// 3. call function instead:
//   applyStyle(element, binding);
// },
// update: (element, binding) => {
//   applyStyle(element, binding);
// },
// };

// Lifecycle hooks: bind, update, inserted, componentUpdated, unbind.

// But bind and update mostly is used together so there's a shorthand FUNCTION for this:
// A common way to write directives.
export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
