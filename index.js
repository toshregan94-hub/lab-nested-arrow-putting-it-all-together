function createLoginTracker(userInfo){
  let attemptCount =0;
  return (passwordAttempt)=>{
    attemptCount++;
    if (passwordAttempt=== userInfo && attemptCount <=3) {
      return "Login succesful";

    } else if (attemptCount <=3) {
      return `Attempt ${attemptCount} : Login failed`;
    } else{
      return "Account locked due to too many failed login attempts";

    }
  }
}


