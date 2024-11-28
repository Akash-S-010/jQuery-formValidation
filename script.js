$.validator.addMethod(
    "customEmail",
    function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
    },
    "Please enter a valid email address."
);

$("#form").validate({
    rules: {
        username: {
            required: true,
            minlength: 4,
            maxlength: 10
        },
        email: {
            required: true,
            customEmail: true
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
            minlength: "Minumum 4 characters required",
            maxlength: "Maximum 10 characters."
        },
        email: {
            required: "Email is required.",
            customEmail: "Please enter a valid email address."
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
