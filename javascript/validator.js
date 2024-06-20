function eventFormValidationSchema(name, email, phoneNumber, eventDate, numberOfTickets) {
    
    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z ]+$/; // Allows letters and spaces only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validates email format
    const phoneRegex = /^\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    const dateRegex =  /^(?:(?:19|20)\d{2})-(?:(?:(?:0[13578]|1[02])-(?:0[1-9]|[12][0-9]|3[01]))|(?:(?:0[469]|11)-(?:0[1-9]|[12][0-9]|30))|(?:02-(?:0[1-9]|1[0-9]|2[0-8]))|(?:02-29))$/;    // Validate date in the format MM/DD/YYYY
    const ticketsRegex = /^[1-9]|10$/; // Validates number between 1 and 10

    // Object to store errors
    let errors = {};

    // Validate Name
    if (!nameRegex.test(name)) {
        errors.name = "Name should contain letters and spaces only";
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address";
    }

    // Validate Phone Number
    if (!phoneRegex.test(phoneNumber)) {
        errors.phoneNumber = "Please enter a valid phone number in (123) 456-7890 format";
    }

    // Validate Event Date
    if (!dateRegex.test(eventDate)) {
        errors.eventDate = "Please enter a valid date in MM/DD/YYYY format";
    }

    // Validate Number of Tickets
    if (!ticketsRegex.test(numberOfTickets)) {
        errors.numberOfTickets = "Number of tickets should be between 1 and 10";
    }

    // Return validation result
    if (Object.keys(errors).length === 0) {
        return { valid: true };
    } else {
        return { valid: false, errors: errors };
    }
}