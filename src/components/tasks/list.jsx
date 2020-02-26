import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import Item from "./list/item"

const List = () => {
    const [tasks] = useContext(TaskContext);
		return (
             <ul className="list-group">
				{
                    tasks.map(task =>(
                    <Item task={task}/>
                    ))
                }
			</ul>
		);
};

export default List;
