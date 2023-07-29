// Component for Contact Page

import "./Contact.css"

function Contact() {
    return(   
    <section id="contact" class="contact">
    
    {/* <!-- Contact Form --> */}
       <div class="contact-form">
         <form name="contact" class="form" netlify>
           <div class="left-form">
             <label for="name">Name</label>
             <input type="text" id="name" name="name" required />
             <label for="email">Email</label>
             <input type="text" id="email" name="email" required />
             <label for="phone">Phone No</label>
             <input type="number" id="phone" name="phone" />
           </div>
           <div class="right-form">
             <textarea name="text" placeholder="Anything to add..."></textarea>
             <button type="submit">Submit</button>
            </div>
         </form>
        </div>
    </section>
    )
}

export default Contact