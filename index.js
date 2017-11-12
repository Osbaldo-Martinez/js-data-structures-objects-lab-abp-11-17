const driver={
 name: 'Sam'
}
function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = {...driver}
  newDriver[key] = value;
  return newDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}
function deleteFromDriverByKey(driver, key){
  newDriver = {...driver}
  delete newDriver[key];
  return newDriver;
}
