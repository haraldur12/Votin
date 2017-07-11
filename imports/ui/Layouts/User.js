import React from 'react';
import UserQuestions from '../Pages/UserQuestions';
import Header from '../Components/Header';

const UserPage = () => (
  <div>
    <Header title={'My Questions'} />
    <UserQuestions />
  </div>
);

export default UserPage;
