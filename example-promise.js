// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('city not found');
// }

// getTempCallback('Philadelphia', function (err, temp) {
// 	if(err) {
// 		console.log('error', err);
// 	} else {
// 		// console.log('sucess', temp)

// 	}
// });
  
//   function getTempPromise (location) {
//   	return new Promise(function (resolve, reject) {
//   		setTimeout(function () {
//   			resolve(79);
//   			reject('city not found');
//   		}, 1000);
//   	});

//   }

//   getTempPromise('philadelphia').then(function (temp) {
//   	 console.log('promise sucess', temp);
//   }, function (err) {
//   	 console.log('promose error', err);
//   });

    //Challenge area

     function addPromise (a , b) {
     return new Promise(function (resolve, reject) {
   		if (typeof a === 'number' && typeof b === 'number') {
   			resolve(a + b);
   		} else {
   			reject('A and b need to  be numbers');
   		}
   	});
 }


      addPromise(2, 3).then(function (sum) {
   	 console.log('sucess', sum);
   }, function (err) {
   	 console.log('error', err);
   	    });
   
    addPromise('andrew', 9).then(function (sum) {
   	 console.log('this should not show up');
   }, function (err) {
   	 console.log('this should appear', err);
   	    });
