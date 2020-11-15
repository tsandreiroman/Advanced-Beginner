export const functionDeclarationHoisting = () => {
  return Hoisted();

  function Hoisted() {
    return "I was hoisted";
  };
};

export const functionExpressionHoisting = () => {
  return notHoisted;

  var notHoisted;
  notHoisted = () => 'I was not hoisted';
};

export const varHoisting = () => {
  var myVar = 1;
  var myOtherVar = true;
  
  if (myOtherVar) {
    var myVar = 2; 
  }
  
 return myVar;
};

export const letHoisting = () => {
  let myLet = 1;
  let myOtherLet = true;
  
  if (myOtherLet) {
    let myLet = 2; 
  }
  
 return myLet;
};