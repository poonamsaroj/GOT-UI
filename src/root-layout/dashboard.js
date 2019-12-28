import React from 'react';
import HeaderComponent from '../shared-layout/header'
import BattleTable from '../components/battledata';
import CssBaseline from '@material-ui/core/CssBaseline';
import './dashboard.css';
import Container from '@material-ui/core/Container';


export default function MainComponent() {
  return (
      <React.Fragment>
          <HeaderComponent />
          {/* <React.Fragment> */}
            <CssBaseline />
            <Container className="container-margin">
                <BattleTable />
            </Container>
      </React.Fragment>
  );
}