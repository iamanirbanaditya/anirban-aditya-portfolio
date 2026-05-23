<<<<<<< HEAD
"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [

{
year:"1988",
title:"The Beginning",
text:"A journey rooted in values, family, and purpose.",
image:"/images/tl1.jpg",
size:"small"
},

{
year:"1991",
title:"Brotherhood",
text:"The arrival of a younger brother strengthened the spirit of family.",
image:"/images/tl2.png",
size:"small"
},

{
year:"2006",
title:"Schooling Complete",
text:"A milestone marking discipline and ambition.",
image:"/images/tl3.jpeg",
size:"large"
},

{
year:"2009",
title:"B.Com Graduation",
text:"Graduated from the University of Calcutta.",
image:"/images/tl4.jpeg",
size:"small"
},

{
year:"2011",
title:"MBA in HRM",
text:"Completed MBA from the University of Wales.",
image:"/images/tl5.PNG",
size:"small"
},

{
year:"2012",
title:"London Film Academy",
text:"Exploring cinematic storytelling and creativity in London.",
image:"/images/tl6.jpeg",
size:"large"
},

{
year:"2014",
title:"Loss & Leadership",
text:"A defining emotional turning point alongside taking over as Chairman.",
image:"/images/tl7.jpeg",
size:"featured"
},

{
year:"2015",
title:"Marriage",
text:"A new chapter of companionship and shared dreams.",
image:"/images/tl8.jpeg",
size:"small"
},

{
year:"2018",
title:"Baby Girl",
text:"Welcoming joy, warmth, and deeper purpose.",
image:"/images/tl9.jpeg",
size:"small"
},

{
year:"2023",
title:"Baby Boy",
text:"Strengthening the meaning of legacy and future.",
image:"/images/tl10.jpeg",
size:"large"
},

{
year:"2024",
title:"ICC National Expert Committee",
text:"Leadership and contribution recognized nationally.",
image:"/images/tl11.jpeg",
size:"small"
},

{
year:"Today",
title:"Legacy Continues",
text:"Living a life of contentment, prosperity, and purpose.",
image:"/images/tl12.jpg",
size:"featured"
}

];

export default function TimelinePage(){

const sectionRef = useRef(null);
const trackRef = useRef(null);

useEffect(() => {

const track = trackRef.current;

if(!track) return;

const handleWheel = (e) => {

e.preventDefault();

/* FASTER + SMOOTHER */

track.scrollLeft += e.deltaY * 1.8;

};

track.addEventListener(
"wheel",
handleWheel,
{ passive:false }
);

return () => {

track.removeEventListener(
"wheel",
handleWheel
);

};

}, []);

return(

<section
className="timeline-section"
ref={sectionRef}
>

<div
className="timeline-track"
ref={trackRef}
>

{timelineItems.map((item,index)=>(

<div
className={`
timeline-card
${item.size}
`}
key={index}
>

<div
className="timeline-image"
style={{
backgroundImage:`url(${item.image})`
}}
></div>

<div className="timeline-info">

<p className="timeline-year">
{item.year}
</p>

<h2>
{item.title}
</h2>

<div className="timeline-line"></div>

<p className="timeline-text">
{item.text}
</p>

</div>

</div>

))}

</div>

</section>

);

=======
"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [

{
year:"1988",
title:"The Beginning",
text:"A journey rooted in values, family, and purpose.",
image:"/images/tl1.jpg",
size:"small"
},

{
year:"1991",
title:"Brotherhood",
text:"The arrival of a younger brother strengthened the spirit of family.",
image:"/images/tl2.png",
size:"small"
},

{
year:"2006",
title:"Schooling Complete",
text:"A milestone marking discipline and ambition.",
image:"/images/tl3.jpeg",
size:"large"
},

{
year:"2009",
title:"B.Com Graduation",
text:"Graduated from the University of Calcutta.",
image:"/images/tl4.jpeg",
size:"small"
},

{
year:"2011",
title:"MBA in HRM",
text:"Completed MBA from the University of Wales.",
image:"/images/tl5.PNG",
size:"small"
},

{
year:"2012",
title:"London Film Academy",
text:"Exploring cinematic storytelling and creativity in London.",
image:"/images/tl6.jpeg",
size:"large"
},

{
year:"2014",
title:"Loss & Leadership",
text:"A defining emotional turning point alongside taking over as Chairman.",
image:"/images/tl7.jpeg",
size:"featured"
},

{
year:"2015",
title:"Marriage",
text:"A new chapter of companionship and shared dreams.",
image:"/images/tl8.jpeg",
size:"small"
},

{
year:"2018",
title:"Baby Girl",
text:"Welcoming joy, warmth, and deeper purpose.",
image:"/images/tl9.jpeg",
size:"small"
},

{
year:"2023",
title:"Baby Boy",
text:"Strengthening the meaning of legacy and future.",
image:"/images/tl10.jpeg",
size:"large"
},

{
year:"2024",
title:"ICC National Expert Committee",
text:"Leadership and contribution recognized nationally.",
image:"/images/tl11.jpeg",
size:"small"
},

{
year:"Today",
title:"Legacy Continues",
text:"Living a life of contentment, prosperity, and purpose.",
image:"/images/tl12.jpg",
size:"featured"
}

];

export default function TimelinePage(){

const sectionRef = useRef(null);
const trackRef = useRef(null);

useEffect(() => {

const track = trackRef.current;

if(!track) return;

const handleWheel = (e) => {

e.preventDefault();

/* FASTER + SMOOTHER */

track.scrollLeft += e.deltaY * 1.8;

};

track.addEventListener(
"wheel",
handleWheel,
{ passive:false }
);

return () => {

track.removeEventListener(
"wheel",
handleWheel
);

};

}, []);

return(

<section
className="timeline-section"
ref={sectionRef}
>

<div
className="timeline-track"
ref={trackRef}
>

{timelineItems.map((item,index)=>(

<div
className={`
timeline-card
${item.size}
`}
key={index}
>

<div
className="timeline-image"
style={{
backgroundImage:`url(${item.image})`
}}
></div>

<div className="timeline-info">

<p className="timeline-year">
{item.year}
</p>

<h2>
{item.title}
</h2>

<div className="timeline-line"></div>

<p className="timeline-text">
{item.text}
</p>

</div>

</div>

))}

</div>

</section>

);

>>>>>>> 2cf4b786717b43af6ab0ef857a2fb545a4103f17
}