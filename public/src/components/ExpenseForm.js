import React from 'react';
import moment from 'moment';
// import 'react-dates/initialize';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import DatePicker from 'react-date-picker';

const now = new Date();
console.log(now);

export default class ExpenseForm extends React.Component{
    state = {
        describe : '',
        note : '',
        amount : '',
        date: new Date(),
        // createdAt: moment(),
        // calendarFocused: false
        error: ''
    }
    onDescriptionChange = (e) => {
        const describe = e.target.value;
        this.setState(() => ({ describe }));
    };
    onNoteChange = (e) => {
        //const note = e.target.value;
        e.persist();
        this.setState(() => ({ note : e.target.value }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        };
    };
    // onDateChange = (createdAt) => {
    //     this.setState(() => { createdAt });
    // };
    onFocusChange = ({ focused }) => {
        this.setState(() => { calendarFocused : focused });
    };
    onDateChange = (date) => {
        if (date){
        this.setState(() => ({ date }))
        }
    };
    onSubmit = (e) => {
        e.preventDefault();
        if ( !this.state.describe || !this.state.amount){
         this.setState({ error: 'please provide description and amount'});
        }else {
        //console.log('submittd');
            this.props.onSubmit({
                describe: this.state.describe,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.date.valueOf()
        });
    }
};
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}> 
                    { this.state.error && <p>{this.state.error}</p>}
                    <input 
                        type='text'
                        placeholder="description"
                        autoFocus
                        value ={this.state.describe} 
                        onChange={this.onDescriptionChange}  
                    >
                    </input>
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    >
                    </input>
                    <textarea
                        value= {this.state.note}
                        placeholder="note"
                        onChange= {this.onNoteChange}
                    >
                    </textarea>
                    <DatePicker 
                        value={this.state.date}
                        onChange={this.onDateChange}/>
                    <button>Add Expense</button>
                    
                </form>
            </div>
        )
    }
}