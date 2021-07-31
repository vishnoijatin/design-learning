var users = [{

		'email' : 'jatin@gkv.com',
		'password' : 'jv123',
		'FirstName' : 'Jatin',
		'LastName' : 'Vishnoi',
		'Mob_Number' : 9876543210
	}, {

		'email' : 'ayush@lxy',
		'password' : 'ac123',
		'FirstName' : 'Ayush',
		'LastName' : 'Chaudhary',
		'mob_Number' : 8976543210
		}
]

var LoginPage = function(email, password, allUsers){
    //console.log(currentUser)
	var isUserFound = false
	var passwordCorrect = false

	for(currentUser in allUsers){
		if(allUsers[currentUser]['email'] == email){
			if(allUsers[currentUser]['password'] == password){
				isUserFound = true
				passwordCorrect = true
				break
			} else {
			isUserFound = true
			passwordCorrect = false
			break
		    }
	    } else{
			isUserFound = false
		    }
	}//end of loop

	if(isUserFound == true && passwordCorrect == true){
		alert('Logged In')
	}
	else if(isUserFound == true && passwordCorrect == false){
		alert('Incorrect Password')
	}
	else {
		alert('User Not Found')
	}

}

var email = prompt("Enter Your Email")
var password = prompt("Enter Password")
LoginPage(email, password, users)