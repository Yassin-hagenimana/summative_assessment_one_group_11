function eventFormValidationSchema(name, email, phoneNumber, eventDate, numberOfTickets) {
    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z ]+$/; // Allows letters and spaces only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validates email format
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/; // Validates (123) 456-7890 format
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Validates MM/DD/YYYY format
    const ticketsRegex = /^[1-9]|10$/; // Validates number between 1 and 10

    // Validate Name
    if (!nameRegex.test(name)) {
        return { valid: false, message: "Name should contain letters and spaces only" };
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        return { valid: false, message: "Please enter a valid email address" };
    }

    // Validate Phone Number
    if (!phoneRegex.test(phoneNumber)) {
        return { valid: false, message: "Please enter a valid phone number in (123) 456-7890 format" };
    }

    // Validate Event Date
    if (!dateRegex.test(eventDate)) {
        return { valid: false, message: "Please enter a valid date in MM/DD/YYYY format" };
    }

    // Validate Number of Tickets
    if (!ticketsRegex.test(numberOfTickets)) {
        return { valid: false, message: "Number of tickets should be between 1 and 10" };
    }

    // All validations passed
    return { valid: true };
}

// Example usage:
const validationResult = eventFormValidationSchema(
    "John Doe", 
    "john.doe@example.com", 
    "(123) 456-7890", 
    "06/18/2024", 
    "5"
);

if (validationResult.valid) {
    console.log("Form validation successful");
} else {
    console.error(`Form validation failed: ${validationResult.message}`);
}