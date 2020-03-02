import React from "react"

const item = ({task}) => {
    return (
        <li
				className="list-group-item d-flex justify-content-between align-items-center"
				key={task.id}
			>
				{task.title}
			</li>
    )
}

export default item