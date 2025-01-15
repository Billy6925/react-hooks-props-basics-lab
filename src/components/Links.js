import React from "react";


function Links ({github,linkedIn}) {
    return (
    <div>
        <h3>Links</h3>
        <a href={github}>https://github.com/liza</a>
        <a href={linkedIn}>https://www.linkedin.com/in/liza/</a>
    </div>
    );
}
export default Links;