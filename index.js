const driver={
 name: 'Sam'
}
function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = {...driver}
  newDriver[key] = value;
  return newDriver;
}
