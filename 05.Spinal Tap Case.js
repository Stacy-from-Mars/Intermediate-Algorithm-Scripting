function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
  }
  
spinalCase("The_Andy_Griffith_Show");