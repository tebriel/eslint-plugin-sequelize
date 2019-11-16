const notSpecified = 'Must specify concurrently: true for index creation.';
const setToFalse = 'Concurrently must be set to true.';

module.exports = context =>
  ({
    CallExpression(node) {
      if (node.callee.property && node.callee.property.name === 'addIndex') {
        if (node.arguments.length !== 2) {
          context.report(node, notSpecified);
          return;
        }
        if (node.arguments[1].type !== 'ObjectExpression') {
          return;
        }
        const concurrentProps = node.arguments[1].properties.filter((item) => item.key.name === 'concurrently');
        if (concurrentProps.length === 0) {
          context.report(node.arguments[1], notSpecified);
          return;
        }
        if (concurrentProps[0].value.value !== true) {
          context.report(concurrentProps[0].value, setToFalse);
        }
      }
    },
  });
