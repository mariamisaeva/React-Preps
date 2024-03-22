import { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {

    const [person, setPerson] = useState(null);

    const getPerson = async () => {

        try {
            const response = await fetch('https://www.randomuser.me/api?results=1'); //1 person
            const data = await response.json();

            const results = data.results[0];
            // const { first, last } = results.name;
            // const { email } = results;

            setPerson({ first_name: results.name.first, last_name: results.name.last, email: results.email });

        } catch (e) {
            console.error('ERROR fetching data', e);
        }
    };


    useEffect(() => {
        getPerson();

    }, []); //one time

    // console.log('PERSON: ', person);



    return (
        <Person person={person} />
    );

}

export default PersonController;
