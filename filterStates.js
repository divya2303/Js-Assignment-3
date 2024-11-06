const states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Maharashtra", "Gujarat", "Karnataka"];
const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates); 
