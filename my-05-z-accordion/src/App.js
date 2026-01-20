import { useState } from "react";
import "./styles.css";

//  data
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return <div className='accordion'>
    {/* example of replacing text={} prop with a children prop */}
    {data.map((el, i)=>(<AccordionItem 
      currentOpen={currentOpen} 
      onOpen={setCurrentOpen} 
      key={el.title} 
      title={el.title} 
      // text={el.text} //old example without children props
      num={i}>
        {el.text} 
      </AccordionItem>
    ))}
    <AccordionItem 
      currentOpen={currentOpen} 
      onOpen={setCurrentOpen} 
      key="unique id 101" 
      title="Static Text" 
      num={3}>
        <p>The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.</p>
      </AccordionItem>
    </div>;
}

function AccordionItem({num, title, currentOpen, onOpen, children}){
  // const [isOpen, setIsOpen] = useState(false); //before example that uses children props

  //updated with children props example
  const isOpen = num === currentOpen; // 1 is === to 1 and then it becomes true

  function handleToggle(){
    // example from before children props were used
    // setIsOpen(current => !current)

    // children props with parent to child relationship
    // the parent hands the child a function which the child updates
    //onOpen(num); //this can no longer click and close itself
    onOpen(isOpen ? null : num); //this can close itself when clicked
  }

  return <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
    <p className='number'>{num < 9 ? `0${num+1}` : num + 1}</p>
    <p className="title">{title}</p>
    <p className='icon'>{isOpen ? "-" : "+"}</p>

    {isOpen && <div className="content-box">{children}</div>}
  </div>
}