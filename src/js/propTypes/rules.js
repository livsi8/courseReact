export default [
    {
        id: 1,
        props: 'optionalArray:',
        example: 'PropTypes.array',
        description: 'You can declare that a prop is a specific JS type. By default, these are all optional.'
    },
    {
        id: 2,
        props: 'optionalBool:',
        example: 'PropTypes.bool',
    },
    {
        id: 3,
        props: 'optionalFunc:',
        example: 'PropTypes.func'
    },
    {
        id: 4,
        props: 'optionalNumber:',
        example: 'PropTypes.number'
    },
    {
        id: 5,
        props: 'optionalObject:',
        example: 'PropTypes.object'
    },
    {
        id: 6,
        props: 'optionalString:',
        example: 'PropTypes.string'
    },
    {
        id: 7,
        props: 'optionalSymbol:',
        example: 'PropTypes.symbol'
    },
    {
        id: 8,
        props: 'optionalNode:',
        example: 'PropTypes.node',
        description: 'Anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.'
    },
    {
        id: 9,
        props: 'optionalElement:',
        example: 'PropTypes.element',
        description: 'A React element.'
    },
    {
        id: 10,
        props: 'optionalMessage:',
        example: 'PropTypes.instanceOf(Message)',
        description: 'You can also declare that a prop is an instance of a class. This uses JS\'s instanceof operator'
    },
    {
        id: 11,
        props: 'optionalEnum:',
        example: 'PropTypes.oneOf([\'News\', \'Photos\'])',
        description: 'You can ensure that your prop is limited to specific values by treating it as an enum'
    },
    {
        id: 12,
        props: 'optionalUnion:',
        example: 'PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Message)]),',
        description: 'An object that could be one of many types'
    },
    {
        id: 13,
        props: 'optionalArrayOf:',
        example: 'PropTypes.arrayOf(PropTypes.number)',
        description: 'An array of a certain type'
    },
    {
        id: 14,
        props: 'optionalObjectOf:',
        example: 'PropTypes.objectOf(PropTypes.number)',
        description: 'An object with property values of a certain type'
    },
    {
        id: 15,
        props: 'optionalObjectWithShape:',
        example: 'PropTypes.shape({colors: PropTypes.string, fontSize: PropTypes.number}),',
        description: 'An object taking on a particular shape'
    },
    {
        id: 16,
        props: 'requiredFunc:',
        example: 'PropTypes.func.isRequired',
        description: 'You can chain any of the above with `isRequired` to make sure a warning is shown if the prop isn\'t provided.'
    },
    {
        id: 17,
        props: 'requiredAny:',
        example: 'PropTypes.any.isRequired',
        description: 'A value of any data type'
    },
    // {
    //     id: 18,
    //     props: 'customProp:',
    //     example: 'function(props, propName, componentName) {\n' +
    //     '    if (!/matchme/.test(props[propName])) {\n' +
    //     '      return new Error(\n' +
    //     '        \'Invalid prop `\' + propName + \'` supplied to\' +\n' +
    //     '        \' `\' + componentName + \'`. Validation failed.\'\n' +
    //     '      );\n' +
    //     '    }\n' +
    //     '  },',
    //     description: '// You can also specify a custom validator. It should return an Error\n' +
    //     '  object if the validation fails. Don\'t `console.warn` or throw, as this\n' +
    //     '  won\'t work inside `oneOfType`.'
    // },
    // {
    //     id: 19,
    //     props: 'customArrayProp:',
    //     example: 'customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {\n' +
    //     '    if (!/matchme/.test(propValue[key])) {\n' +
    //     '      return new Error(\n' +
    //     '        \'Invalid prop `\' + propFullName + \'` supplied to\' +\n' +
    //     '        \' `\' + componentName + \'`. Validation failed.\'\n' +
    //     '      );\n' +
    //     '    }\n' +
    //     '  })',
    //     description: 'You can also supply a custom validator to `arrayOf` and `objectOf`.\n' +
    //     '  It should return an Error object if the validation fails. The validator\n' +
    //     '  will be called for each key in the array or object. The first two\n' +
    //     '  arguments of the validator are the array or object itself, and the\n' +
    //     '  current item\'s key.'
    // },
];
