function createLoginTracker(userInfo){
  // initialize attempt count
  let attemptCount =0;
  const loginAttempt= (passwordAttempt) =>{
    // account lock before checking incrementation
    if(attemptCount>=3){
      return "Account locked due to too many failed login attempts"; 
    }
    //increment attempt count
    attemptCount++;

    //password check
    if (passwordAttempt===userInfo.password){
      return "Login successful";
    } else{
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
  
    //return the inner function
return loginAttempt;
}

 module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

