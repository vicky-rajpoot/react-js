import React from "react";
import { useParams } from "react-router-dom";

export default function Users() {

    const { userId } = useParams();
    return(
        <>
        <div>
        Detail of user {userId}
        </div>
        </>
    );
}