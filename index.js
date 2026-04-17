function createLoginTracker(userInfo){
  // initialize attempt count
  let attemptCount =0;
  const loginAttempt= (passwordAttempt) =>{
    attemptCount++;
  
    //account lock check
    if (attemptCount>3){
      return "Account locked dur to too many failed attempts";
    }
    //password check
    if (passwordAttempt===userInfo.password){
      return "Login successful";
    } else{
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
  
    //return the inner function
return loginAttempt;

 module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
}
