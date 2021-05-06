import React from "react";
import { Route, Switch } from "react-router-dom";



import RestPassword from './Auth/restPassword'

import UnderConstruction from './UnderConstruction'

import AdminDashboard from './Admin'
import SuperAdmin from './SuperAdmin'
import Specialist from './Admin/Specialist'
import Settings from './Admin/Setting'
import Education from './Admin/Education'
import Catagory from './Admin/Catagory'
import Community from './Admin/Community'
import Polls from './Admin/Polls'
import Blog from './Admin/Blog'
import User from './Admin/Users'
import ExerciseCategory from './SuperAdmin/Exercise/Category'
import Exercises from './SuperAdmin/Exercise/Exercises'
import Symptoms from './SuperAdmin/Symptoms'
import Conditions from './SuperAdmin/Conditions'
import Supplement from './SuperAdmin/Supplement'
import Vitamins from './SuperAdmin/Vitamins'
import HealthCareCategory from './SuperAdmin/HealthCare/Category'
import Occupation from './SuperAdmin/HealthCare/Occupation'
const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      {/* <Route path={`${match.url}home`} component={Home}/> */}

      <Route exact path={`${match.url}dashboard`} component={UnderConstruction} />
      <Route exact path={`${match.url}superAdmin`} component={UnderConstruction} />
      <Route path={`${match.url}resetPassword`} component={RestPassword} />
      <Route exact path={`${match.url}specialist`} component={Specialist} />
      <Route exact path={`${match.url}settings`} component={Settings} />
      <Route exact path={`${match.url}education`} component={UnderConstruction} />
      <Route exact path={`${match.url}catagory`} component={UnderConstruction} />
      <Route exact path={`${match.url}community`} component={UnderConstruction} />
      <Route exact path={`${match.url}polls`} component={UnderConstruction} />
      <Route exact path={`${match.url}blog`} component={UnderConstruction} />
      <Route exact path={`${match.url}users`} component={User} />
      
      
      
      <Route exact path={`${match.url}exercise/category`} component={ExerciseCategory} />
      <Route exact path={`${match.url}exercise/exercises`} component={Exercises} />
      <Route exact path={`${match.url}healthCare/category`} component={HealthCareCategory} />
      <Route exact path={`${match.url}healthCare/occupation`} component={Occupation} />
      <Route exact path={`${match.url}symptoms`} component={Symptoms} />
      <Route exact path={`${match.url}conditions`} component={Conditions} />
      <Route exact path={`${match.url}supplement`} component={Supplement} />
      <Route exact path={`${match.url}vitamins`} component={Vitamins} />


      
    </Switch>
  </div>
);

export default App;
