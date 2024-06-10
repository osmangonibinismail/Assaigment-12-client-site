import { Helmet } from "react-helmet-async"
import Banner from "../Banner/Banner"
import TopScholarship from "../TopScholarship/TopScholarship"
import { useLocation } from "react-router-dom"
import ContactUs from "../ContactUs/ContactUs"
import History from "../History/History"
import StudentReviewSection from "../StudentReviewSection/StudentReviewSection"


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
      <ContactUs></ContactUs>
      <History></History>
      <StudentReviewSection></StudentReviewSection>
    </div>
  )
}

export default Home
