$("#form").validate({
    rules: {
        username: {
            required: true,
            minlength: 4,
            maxlength: 10
        },
        email: {
            required: true,
            email: true 
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 10
        },
        password2: {
            required: true,
            equalTo: "#password" 
        }
    },
    messages: {
        username: {
            required: "Username is required.",
            minlength: "Minumum 4 charecters required",
            maxlength: "Maximum 10 characters."
        },
        email: {
            required: "Email is required.",
            email: "Please enter a valid email address."
        },
        password: {
            required: "Password is required.",
            minlength: "Minimum 6 characters.",
            maxlength: "Maximum 10 characters."
        },
        password2: {
            required: "Please confirm your password.",
            equalTo: "Passwords do not match."
        }
    },
    
});
