import React from "react";
import BoardView from "../../components/boardview";
import BoardCreate from "../../components/boardcreate";
import BoardEdit from "../../components/boardedit";

export function QnA(props) {
    return (
        <div className="BoardWrapper" style={{marginTop: "61px", display:'flex', justifyContent:'center'}}> 
            <BoardView setId={props.setId} id={props.id} setContent={props.setContent} setTitle={props.setTitle} setUsername={props.setUsername} username={props.username} title={props.title}/>
        </div>
    );
}


export default QnA;
