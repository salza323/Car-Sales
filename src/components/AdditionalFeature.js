import React from 'react';
import { updateTotal, deleteTotal } from '../actions/actions';

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={
          (() => this.props.updateTotal(this.props.updateTotal),
          this.props.deleteTotal(this.props.deleteTotal))
        }
        className='button'
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
