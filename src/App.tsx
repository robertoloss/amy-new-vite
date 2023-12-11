import { useState, useEffect } from "react"
import { createClient } from "@sanity/client";

const client = createClient({
  apiVersion : "2023-12-10",
  dataset : "production",
  projectId : "qyyz7qna",
  useCdn : false,
})

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
