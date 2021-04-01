//function to sign user out of site if inactive for 1 min
let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    function logout() {
      console.log("You are now logged out.")
      endSession()
    }
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 60000)
    }
  };
  inactivityTime();
  console.log('Please wait...');


const endSession = async () => {
            const response = await fetch('/api/users/logout', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            });
          
            if (response.ok) {
              document.location.replace('/');
            } else {
              alert(response.statusText);
            }
          }; 


