import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { appReducer as reducer, initialState } from './reducers/appReducer';
import { connect } from 'react-redux';
import { UPDATE_TOTAL } from './actions/actions';

const App = (props) => {
  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className='box'>
        <AdditionalFeatures
          additionalFeatures={props.state.additionalFeatures}
        />
        <Total
          car={props.state.car}
          additionalPrice={props.state.additionalPrice}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

// export default App;

export default connect(mapStateToProps, { UPDATE_TOTAL })(App);
