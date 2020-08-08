import React from 'react'


function sup() {
  alert("Hi! What's up?")
}

function Contact() {
    return (
        <button style={{color: "red"}} onClick={sup}>
            Hi
        </button>
    )
}

export default Contact
