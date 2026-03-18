const makeChange = (c) => {
  // your name here
	const values=[25,10,5,1];
	const v=[0, 0,  0,  0 ]
	let i=0
	while(c>0){
		if(c>=values[i]){
			c=c-values[i]
			v[i]+=1
		}else{
			i++
		}
	}
	return {"q":v[0],"d":v[1],"n":v[2],"p":v[3]}
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
