export default {
  // the element is the sales span-tag in this example..
  bind: (element, binding) => {
    // element.style.position = 'absolute';
    // element.style.bottom = '5px';
    // element.style.right = '5px';

    // with binding/arg/modifiers:
    // console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
    // if (binding.arg !== 'position') return;
    // Object.keys(binding.modifiers).forEach((key) => {
    //   element.style[key] = '5px';
    // });
    // element.style.position = 'absolute';

    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.value[position];
    });
    element.style.position = 'absolute';
  },
};
