function userCredentials(req,res,next) {
    console.log('Username : (alex)');
    console.log('email : (alex@gmail.com)');
    console.log('password : (12alex45)');
    console.log('age : (20)');
    next()
    
}

export default userCredentials;