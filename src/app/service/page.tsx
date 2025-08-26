import ServiceHero from "./ServiceHero";
import InfoCard from "./InfoCard"
import Questions from "./Questions";
import VideoContent from "../components/VideoContent";
import SdsEducation from "../components/SdsEdutaciton"
import ContactForm from "./ContactForm";

function Service() {
  return (
   <>
     <ServiceHero />
     <InfoCard />
     <SdsEducation/>
     <VideoContent />
     <Questions />
     <ContactForm />
   </>
  );
}

export default Service;
