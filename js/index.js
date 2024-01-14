var element = document.querySelector('p');

if (element.offsetHeight < element.scrollHeight ||
    element.offsetWidth < element.scrollWidth) {
    // your element has overflow and truncated
    // show read more / read less button
    console.log('Truncated');
} else {
    // your element doesn't overflow (not truncated)
    console.log('Not truncated');
}