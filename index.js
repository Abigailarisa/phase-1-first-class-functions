function receivesAFunction(callback) {
callback();
};


function returnsANamedFunction() {
    return receivesAFunction;
};

function returnsAnAnonymousFunction(){
    return () => {}

};





// receivesAFunction(callback) {
//     console.log("spy")
// }

// receivesAFunction(spy);

//   function exerciseRoutine(postRunActivity) {
//         runFiveMiles();
//         postRunActivity();
//       }
