
import {useRouteError} from "react-router-dom";

export const ErrorPage = ()=>{


    const error = useRouteError();
    console.log(error);

        return (

            <div>
            <h1> oops! an error is now accured Error page</h1>
                { error && <p>{error.data}</p>}
            </div>
    
    );

    
    };