import {Link} from 'react-router-dom'

export default function Third(){
   return (
      <div className="h-screen bg-violet-400 flex flex-col items-center gap-8">
	<h1 className="text-5xl">Third page</h1>
	<Link className="text-2xl" to="/ludmila-bday2025/">Go Back</Link>
      </div>
);
}
