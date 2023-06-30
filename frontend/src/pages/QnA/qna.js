import React from "react";
import BoardView from "../../components/boardview";
import BoardCreate from "../../components/boardcreate";
import BoardEdit from "../../components/boardedit";

export function QnA() {
    return (
        <div className="BoardWrapper" style={{marginTop: "61px", display:'flex', justifyContent:'center'}}> 
            <BoardView />
        </div>
    );
}


export default QnA;
