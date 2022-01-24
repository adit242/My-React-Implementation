import React from 'react'
import Newlist from './Newlist';

function Listrendering({list}) {
    let ListOfname = ["Aditya", "ABD", "Rahul"];
    let chist = [
        {
          id: 1,
          name: "Shreya Ghoshal"
        },
        {
          id: 2,
          name: "Arijit singh"
        },
        {
          id: 3,
          name: "Atif Aslam"
        }
      ];
      let laplist=chist.map(list => <Newlist key={list.id} li={list}/>)
    let caplist = ListOfname.map(names => <h1>Hii {names} .</h1>)
    return (
        <div>
            {laplist}
            {caplist}
        </div>
    )
}

export default Listrendering
