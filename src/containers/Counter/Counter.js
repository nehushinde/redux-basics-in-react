import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Counter.css';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div className="Counter">
                Counter
                <CounterOutput value={this.props.ctr}></CounterOutput>
                <CounterControl label="Inc" clicked={this.props.onIncrementCounter}></CounterControl>
                <CounterControl label="Dec" clicked={this.props.onDecrementCounter}></CounterControl>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}></CounterControl>
                <CounterControl label="Sub 5" clicked={this.props.onSubCounter}></CounterControl>
                <hr />
                <button className="btn" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <dl>
                    {this.props.storeResult.map(strResult => (
                        <dt key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.val}</dt>
                    ))}
                </dl>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResult: state.res.result
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INC}),
        onDecrementCounter: () => dispatch({type: actionTypes.DEC}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5 }),
        onSubCounter: () => dispatch({type: actionTypes.SUB, value: 5 }),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({type: actionTypes.DEL_RESULT, resultId: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);