window.onload =()=>{
    //initial needed tolerance
    let oneDegreeTol = 0.4
    let result;

    //growth rate per degree
    const twoDeg = 0.89/0.71;
    const threeDeg = 0.71/0.53;
    const fourDeg = 0.53/0.36;
    const fiveDeg = 0.36/0.18;

    //list of growth rates
    let growthRate2to5deg = [twoDeg, threeDeg, fourDeg, fiveDeg]; 

    for (let i = 0; i < 4; i++){
        oneDegreeTol =  (oneDegreeTol* (growthRate2to5deg[i]))
        result = (oneDegreeTol)
    /*multiply our initial tolerance by each growth rate per degree
     for the amount of degrees our screw cap has */
    }
    let statement = document.getElementById('result')
    statement.innerHTML = "For the PLA plastic screw cap, the tolerance for the receiver end for this 5 degree helix configuration, is " + result + " mm." 
}