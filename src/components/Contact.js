import Swal from "sweetalert2"
import contact from "../assets/img/contact.jpg"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export const Contact = () => {
    
    const onSubmit = async (event) => {

        
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d4008cdd-3564-41bd-a140-9c70b7cbc28f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    
    return (
      
        <section className="contact" data-aos="fade-up">
            <form onSubmit={onSubmit}>
                <h1>Contact me!</h1>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="Enter your name" name="name" required/>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder="Enter your email" name="email" required/>
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
                
            </form>
            <img src={contact}/>
        </section>
    )
}