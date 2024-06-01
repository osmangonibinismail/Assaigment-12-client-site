import { Helmet } from "react-helmet-async"
import Banner from "../Banner/Banner"
import TopScholarship from "../TopScholarship/TopScholarship"
import { useLocation } from "react-router-dom"


const Home = () => {
  
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <Helmet>
        <title>OAI || Home</title>
      </Helmet>
      <Banner></Banner>
      <TopScholarship></TopScholarship>
    </div>
  )
}

export default Home
