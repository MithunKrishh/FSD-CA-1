import ServiceCard from "./components/serviceCard";
const title1="Web"
   const  title2="App"
  const   desc1="It is used to build web application"
   const  desc2="It is used to build App application"
function App(){
  ServiceCard
  return(
    <div>
      <h1>The title:{title1}</h1>
      <p>The description:{desc1}</p>
      <h1>The title:{title2}</h1>
      <p>The description:{desc2}</p>
    </div>
    
  )
}
export default App