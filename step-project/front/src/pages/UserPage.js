import React from 'react';
import BodyGridUser from '../components/BodyGridUser';
import HeaderUser from '../components/HeaderUser';
import useBreakpoint from '../theme/useBreakpoint';



function UserPage({match, queries}) {

    const userId = match.params.userId;
    const matchPoints = useBreakpoint(queries);


    return (
        <section className="user-container">
            <HeaderUser userId={userId} />
            <BodyGridUser togglePoint={!!matchPoints && matchPoints.toggleCols} userId={userId} />
        </section>
    );
}

export default UserPage;