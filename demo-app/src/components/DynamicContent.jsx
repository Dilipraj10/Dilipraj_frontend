import React from 'react'
import Heading from './Heading';
import Table from './Table';

const DynamicContent = ({isLoggedIn}) => {
//   return (
//     <div>
//         {/* {isLoggedIn ? (<p>Welcome you </p>) : (<p>Login plz</p>)} */}
//         {/* {isLoggedIn && <p>Welcome you </p>} */}
//     </div>

        const Component= isLoggedIn ? Heading : Table;
            return <Component/>;
        }
//   )


export default DynamicContent