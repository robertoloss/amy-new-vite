import { useState, useEffect } from "react"
import client from "../sanity/lib/client.ts"

function App() {
	const [projects, setProjects] = useState<{title: string}[]| null>(null)

	
	useEffect(()=>{
		async function getProjects() {
			const data = await client.fetch(
				`*[_type == "project"]`
			)
			setProjects(data);
			console.log(data);
		}
		getProjects();
		
	},[setProjects])	
	
	if (projects) {
		console.log("projects : ", projects)
	}

  return (
    <>
      <div>	Hello there! </div>
			{projects && projects.map(( project, index: number ) => 
				<h1 key={index}>{project.title}</h1>
			)}
    </>
  )
}

export default App
