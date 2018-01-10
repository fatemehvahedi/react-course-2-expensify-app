import moment from 'moment';

export default [{
    id: '1',
    describe: 'Gum',
    note: '',
    amount: 17800,
    createdAt: 0
},{
    id: '2',
    describe: 'Rent',
    note: '',
    amount: 34000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    describe: 'Credit card',
    note: '',
    amount: 60000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];