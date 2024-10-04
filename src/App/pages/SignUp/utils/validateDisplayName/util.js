const validateDisplayName = async (displayName) => {
    let errors = [];
    if (displayName.length < 3 || displayName.length > 15) {
        errors.push('Display name must be between 3 and 15 characters long');
    }
    if (/\s/.test(displayName)) {
        errors.push('Display name must not contain spaces');
    }
    if (/[^a-zA-Z0-9_.-]/.test(displayName)) {
        errors.push('Display name can only contain letters, numbers, underscores (_), hyphens (-), and periods (.)');
    }
    if (errors.length === 0) {
        const { data: usernameTaken } = await supabase
            .from('usernames')
            .select('displayName')
            .eq('displayName', displayName)
            .single();
        if (usernameTaken) {
            errors.push('Username is already taken, please try again');
        }
    }
    return errors;
};

export default validateDisplayName;