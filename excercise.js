const Names = [
    {
        firstName: 'Mahmoud',
        lastName: 'Hefny'
    },
    {
        firstName: 'Ahmed',
        lastName: 'Hefny'
    },
    {
        firstName: 'Khaled',
        lastName: 'Ebrahim'
    },
    {
        firstName: 'Kamal',
        lastName: 'Hefny'
    },
];

console.log(Names.findIndex((arrayItem) => {
    return arrayItem.lastName !== 'Hefny';
}));