// Assuming sort object might look like this:
const sort = {
  order: 'descending' // or null or undefined
};

// Applying the expression:
const order = (_sort$order = sort.order) !== null && _sort$order !== void 0 ? _sort$order : 'ascending';

console.log(order); // Outputs: 'descending' (if sort.order is defined) or 'ascending' (if sort.order is null or undefined)
