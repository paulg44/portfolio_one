// Component for Contact Page
import "./Contact.css";
import ContactForm from "../../Components/Form/Form";
import { useEffect, useState } from "react";
import sunnyBG from "../../IMG/sunnyBG.jpg";
import rainyBG from "../../IMG/rainyBG.jpg";

function Contact() {
  const [weather, setWeather] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const handleWeatherApi = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=0b2b01cc290f465285d182029250604&q=derby`
        );
        const data = await response.json();
        console.log(data);
        setWeather(data.current.condition.text);
      } catch (error) {
        console.error("Error fetching data from weather API", error);
      }
    };

    // Get the list of condition texts and add more to the list. Maybe make it a json file and import it for cleaner code? Also is there a way to get the users local weather?
    if (weather === "Sunny") {
      setBackgroundImage(sunnyBG);
    } else if (weather === "Light rain" || "Moderate rain" || "Heavy rain") {
      setBackgroundImage(rainyBG);
    } else {
      setBackgroundImage(null);
    }

    handleWeatherApi();
  }, [weather]);
  return (
    <section
      id="contact"
      className="contact"
      style={{
        background: `url(${backgroundImage}) no-repeat center center/cover`,
      }}
    >
      {/* <!-- Contact Form --> */}
      <div className="contact-form">
        <ContactForm />
      </div>
      {/* <a href="mailto: paulgarton1984@hotmail.com" className="email">
        paulgarton1984@hotmail.com
      </a> */}
    </section>
  );
}

export default Contact;
