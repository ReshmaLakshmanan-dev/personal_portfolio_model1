import DeveloperImage from './assets/developer_activity.svg';
import resumeimage from './assets/resume.png';
import Educationimage from './assets/Education.svg';
import htmlimage from './assets/html.svg';
import cssimage from './assets/css.svg';
import jsimage from './assets/js.svg';
import figmaimage from './assets/Figma-logo.png';
import photoshopimage from './assets/photoshop.svg';


export default function App() {
  const listitem =
    [{ id: "Aboutme", label: "Aboutme" }, { id: "skills", label: "skills" }, { id: "Project", label: "Project" }, { id: "Resume", label: "Resume" }, { id: "education", label: "Education" }, { id: "contact", label: "contact" }];
  const scrollToSection = (id) => {
    console.log("hi")
    const element = document.getElementById(id);
    if (element) {
      console.log("element found")
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    //about section
    <div className="min-h-screen bg-gray-200 p-2 md:p-6">
      <nav className=' sticky top-0 z-50 bg-slate-300 ' >
        <ul className='flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 text-slate-200 p-4'>{
          listitem.map((currentval, index) => (
            <li className='menu cursor-pointer px-8 py-2' onClick={() => scrollToSection(currentval.id)} key={currentval.id}>{currentval.label}</li>))
        }
        </ul>
      </nav>
      <div className='flex flex-col-reverse md:flex-row p-5  md:p-10  items-center justify-center ' id='Aboutme'>
        <div> <h1 className='  text-fuchsia-700 font-bold text-2xl p-3 items-center  md:w-full  border-b-[10px] border-b-fuchsia-600 rounded-full'  >Who I'm?</h1>
          <h1 className=" text-black text-3xl font-bold p-5 animate-pulse " >Hi I'm Reshma Lakshmanan</h1>
          <div className='flex flex-wrap shadow-lg md:p-10 font-extralight p-6 rounded-2xl min-w-[300px] md:justify-center max-w-1/2 '><p className='flex flex-wrap'> Engineering graduate and passionate Web Developer with experience in building responsive portfolio and business
            websites. Proficient in HTML, CSS, JavaScript, C, C++, and Java, with hands-on skills in UI/UX design, Android
            development, and graphic design. I enjoy creating user-friendly, visually appealing web solutions that adapt
            seamlessly across devices. Eager to apply my knowledge to real-world challenges and contribute to impactful digital
            experiences</p></div></div>
        <img className="flex justify-center  max-w-[400px]  md:w-1/2 animate-pulse "
          src={DeveloperImage}
          alt="Illustration"
        />
      </div>
      {/*Skill Section*/}
      <div>
        <div id="skills" className='z-3 p-5 md:p-10' >
          <h1 className=' tittle'  >What I have?</h1>
          <div className='flex flex-col md:grid-cols-3 md:grid  justify-between gap-10 p-4'>
            <div className='shadow-2xl p-8  rounded-2xl '><h3 className='text-fuchsia-700 font-bold text-2xl p-3 items-center md:p-1 md:w-full'>frontend Skill </h3><p className=' font-extralight p-4 flex'>"I specialize in building responsive and interactive websites using HTML, CSS, and JavaScript. Proficient in React and Tailwind CSS, I create visually stunning and seamless web applications. My focus is on ensuring that websites are both functional and optimized for performance across all devices." <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
            </p></div>
            <div className='shadow-2xl md:p-8 rounded-2xl '><h3 className='text-fuchsia-700 font-bold text-2xl p-3 items-center md:p-1 md:w-full'>UI/UX Skill</h3><p className=' font-extralight p-4 flex'>"I specialize in designing user-centric interfaces using Figma to create wireframes and prototypes that enhance user experience. By focusing on usability and visual design, I craft intuitive layouts that align with user needs. My goal is to bring ideas to life with seamless, interactive prototypes that ensure a smooth and engaging digital experience."  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
            </p></div>
            <div className='shadow-2xl md:p-8 rounded-2xl '><h3 className='text-fuchsia-700 font-bold text-2xl p-3 items-center md:p-1 md:w-full'>Design Skill</h3><p className=' font-extralight p-4 flex'>"I have expertise in Photoshop, Figma, and Canva to create visually engaging designs. Skilled in designing user interfaces, graphics, and social media content. My focus is on crafting impactful, high-quality visuals that align with user needs and brand identity."<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
            </svg>
            </p></div>
            <div className='shadow-2xl md:p-8 rounded-2xl'><h3 className='text-fuchsia-700 font-bold text-2xl p-3 items-center md:p-1 md:w-full'>Database Skill </h3><p className=' font-extralight p-4 flex'>"I have a strong understanding of SQL and MySQL, with experience in writing complex queries and managing databases. My skills include data retrieval, manipulation, and optimizing queries for performance. I focus on creating efficient, scalable database solutions that support application functionality." <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
              <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
              <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
              <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>
            </p></div>
            <div className='shadow-2xl md:p-8 rounded-2xl '><h3 className='text-fuchsia-700 font-bold text-2xl p-3 items-center md:p-1 md:w-100%'>Adittional Skills</h3><p className=' font-extralight p-4'>"I have a solid foundation in C, C++, and Java, which has strengthened my understanding of Object-Oriented Programming (OOP). My experience with these languages has sharpened my problem-solving skills and deepened my knowledge of data structures and algorithms. I focus on writing efficient and scalable code that adheres to OOP principles." <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
            </svg>
            </p></div>
          </div>
        </div>
        {/*project section*/}
        <div id="Project" className='p-5'  >
          <h1 className='tittle'>Milestone Projects</h1>
          <h2 className=' text-black-700 font-bold p-4 text-2xl'>Web Projects</h2>
          <div className='flex md:flex-row max-w-full p-3 md:p-10 justify-center items-center gap-7 '>
            <div className='max-w-full min-w-[400px] md:w-1/2 flex flex-col mx-auto p-8 justify-center items-center' >
              <div className=' shadow-2xl rounded-2xl md:p-8 p-4  '>
                <h2 className=' text-fuchsia-700 font-extrabold'>personal portfolio</h2>
                <p className='font-semibold p-3'>Description:</p><p className=' font-extralight flex p-4'>-Created a responsive personal portfolio website featuring sections like About, Education, Design
                  Project Demos, Contact, and Achievements.Focused on clean, modern UI/UX to present information clearly and
                  professionally.Ensured mobile responsiveness and smooth navigation for a seamless user experience.</p>
              </div>
              <div className=' shadow-2xl rounded-2xl md:p-8 p-4 '>
                <h2 className=' text-fuchsia-700 font-extrabold'>Business Profile</h2>
                <p className='font-semibold p-3'>Description:</p><p className=' font-extralight flex p-4'>-Developed a sample web project showcasing core web development skills, featuring multiple
                  sections including About, Menu, Gallery, Testimonial, and Contact. Designed with a user-friendly layout and fully
                  responsive interface for seamless viewing across devices.</p>
              </div>
            </div>
            <div className='w-1/2 md:flex flex-row hidden p-8 '>
              <img className=" md:max-w-[200px] animate-pulse" src={htmlimage} alt="" />
              <img className=" md:max-w-[200px]  animate-pulse" src={cssimage} alt="" />
              <img className="md:max-w-[150px] md:p-4 animate-pulse" src={jsimage} alt="" />
            </div></div>
          <h2 className=' text-black-700 font-bold p-4 text-2xl'>UI/UX Project</h2>
          <div className="flex justify-between p-10 w-full">

            <div className="md:flex w-1/2 items-center flex-row justify-center gap-5 animate-pulse hidden">
              <img src={figmaimage} alt="Figma Logo" className="w-40 h-40 object-contain " />
              <img src={photoshopimage} alt="Photoshop Logo" className="w-40 h-40 object-contain " />
            </div>
            <div className="flex flex-col justify-center shadow-2xl rounded-2xl w-full md:w-1/2 p-8">
              <h2 className="text-fuchsia-700 font-extrabold text-xl mb-4">Food Delivery App </h2>
              <p className="font-semibold mb-2">Description:</p>
              <p className="font-extralight flex ">
                -Designed a food delivery application interface using Figma, creating both design and prototype.
                UI/UX design project showcasing food delivery concepts created using Figma.Developed interactive prototypes
                demonstrating user flows for a food.
              </p>
            </div>
          </div></div>
      </div>
      {/*resume section*/}
      <div id="Resume" className='p-5 md:10'>
        <h1 className='tittle'> my Resume</h1><div className='max-w-[700px] min-w-[300px] p-3 md:p-10  mx-auto'><img className=' shadow-2xl text-center ' src={resumeimage} alt="resume" /></div></div>
      <div id="education" className='p-5'>
        <h1 className='tittle'>Educational Status</h1>
        <div className='flex flex-col md:flex-row justify-between p-10'>
          <img src={Educationimage} className='md:w-1/2 animate-pulse' alt="education image" />
          <div className=' shadow-2xl md:1/2 p-6 rounded-2xl'><h1 className=' text-black-700 font-bold font text-2xl p-5 text-center'>Electronics and Communication Engineering</h1><h2 className='text-fuchsia-700 font-bold font text-xl text-center p-4'>St.Joseph's College of Engineering and Technology</h2>
            <p className=' font-extralight flex'>My academic journey began with a foundation in Computer Science during school, where I developed a strong interest in programming and technology. In 2020, I enrolled at St. Joseph's College of Engineering & Technology, Thanjavur, pursuing a Bachelor's degree in Electronics and Communication Engineering (ECE).

              In my 3rd semester, I completed the Advanced Diploma in Computer Programming (ADCP) course, which provided me with a solid grounding in programming concepts and enhanced my technical abilities. I consistently performed well in academics and actively participated in learning opportunities.

              During my final year, I was offered an internship at Inmakes Infotech, Kerala. Although I couldn't complete the internship, it was a valuable learning experience in terms of selection and process exposure. I successfully graduated in 2024 with First Class, achieving a CGPA of 8.3, and completed my degree without any history of arrears or backlogs.</p></div>
        </div></div>
      {/*contact*/}
      <div id="contact" className='p-5'>
        <h1 className='tittle p-10'>Contact Me</h1>
        <ul className='mx-auto  px-9 py-11  flex flex-col gap-5 md:gap-4 justify-start md:justify-center md:items-center '>
          <li><a href='mailto:rresh6427@gmail.com' className='flex items-center text-xl hover:text-fuchsia-700'>Gmail:rresh64@gmail.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          </a></li>
          <li>
            <a href='https://wa.me/918610402405' className=' flex items-center text-xl hover:text-fuchsia-700'> Mob.No:8610402405 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
            </svg>
            </a>
          </li>
          <li><a href='https://www.linkedin.com/in/-reshma-lakshmanan/' className=' justify-start  text-xl flex hover:text-fuchsia-700 '>LinkedIn:www.linkedin.com/in/-reshma-lakshmanan <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
          </svg>
          </a>
          </li>
          <li><a href='https://www.instagram.com/designer_developer_r?igsh=ODc4eTNqajh4YzBi' className=' flex items-center text-xl hover:text-fuchsia-700'>Instagram:designer_developer_r <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
          </svg>
          </a>
          </li>
        </ul></div>
      {/*footer*/}
      <footer className=' bg-fuchsia-700 h-7 w-full '>
        <p className='text-s text-white'>&copy; 2025 Reshma Lakshaman.All rights reserved</p>
      </footer>
    </div>

  );
}
