/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import React from "react";
import { Button } from "reactstrap";

import { auth } from "../../firebase";

const SignOutButton = () => (
  <Button color="info" onClick={auth.doSignOut}>
    Sign Out
  </Button>
);

export default SignOutButton;
