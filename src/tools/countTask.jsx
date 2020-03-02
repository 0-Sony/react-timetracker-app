export default (project , tasks) => {
	let Number = 0
	tasks.map( function(task){
		if (task.project_id === project.id) {
			Number =+1
		}
	})
	return Number
}