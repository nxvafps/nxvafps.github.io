const validateEmail = async (email) => {
    let errors = [];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address of the form name@domain.xyz');
    }
    if (errors.length === 0) {
        const { data: emailTaken } = await supabase
            .from('usernames')
            .select('email')
            .eq('email', email)
            .single();
        if (emailTaken) {
            errors.push('Email is already taken, please try again');
        }
    }
    return errors;
};

export default validateEmail;