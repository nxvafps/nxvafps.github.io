import { useState, useEffect } from 'react';
import supabase from '../../../config';

const useFetchCurrentProject = () => {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('current', 'y')
                .limit(1);

            if (error) {
                setFetchError('Could not fetch projects');
                setProjects(null);
                console.log(error);
            }
            if (data) {
                setProjects(data);
                setFetchError(null);
            }
        };

        fetchProjects();
    }, []);

    return { fetchError, projects };
};

export default useFetchCurrentProject;