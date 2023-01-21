import React from "react";
import UseEffectAPI from "./UsersDataApi";
import Welcome from "./Welcome";
import Form from "./FormData";

export default function Home() {
    return(
        <>
        <div>
        Home page
        </div>
        <Welcome  />
    <UseEffectAPI />
    <Form />
        </>
    );
}