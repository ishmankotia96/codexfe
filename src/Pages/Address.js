import React from 'react'


function info() {
  alert("HEAVEN")
}

function Address() {
    return (
        <button style={{color: "blue"}} onClick={info}>
            Show Address
        </button>
    )
}

export default Address
