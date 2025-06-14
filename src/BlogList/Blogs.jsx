import BlogMain from '../assets/blog_main.jpg';
import BlogTraining1 from '../assets/blog_training.jpg';
import BlogTraining2 from '../assets/blog_training1.jpg';
import BlogCommunity1 from '../assets/blog_community.jpg';
import BlogCommunity2 from '../assets/blog_community1.jpg';
import BlogSession1 from '../assets/blog_session1.jpg';
import BlogSession2 from '../assets/blog_session2.jpg';
import BlogSession3 from '../assets/blog_session3.jpg';
import BlogSession4 from '../assets/blog_session4.jpg';

import Blog1 from '../assets/second1.jpg';
import Blog2 from '../assets/second2.jpg';
import Blog3 from '../assets/second3.jpg';
import Blog4 from '../assets/second4.jpg';
import Blog5 from '../assets/second5.jpg';

import Tblog1 from '../assets/3blogm.jpg';
import Tblog2 from '../assets/3blog1.jpg';
import Tblog3 from '../assets/3blog2.jpg';
import Tblog4 from '../assets/3blog3.jpg';

import Tblog5 from '../assets/3blog5.jpg';
import Tblog6 from '../assets/3blog6.jpg';
import Tblog7 from '../assets/3blogMain.jpg';


import Fblog1 from '../assets/4blog1.jpg';
import Fblog2 from '../assets/4blog9.jpg';
import Fblog3 from '../assets/4blog3.jpg';
import Fblog4 from '../assets/4blog4.jpg';

import Fblog5 from '../assets/4blog5.jpg';
import Fblog6 from '../assets/4blog6.jpg';
import Fblog7 from '../assets/4blog7.jpg';
import Fblog8 from '../assets/4blog8.jpg';
import Fblog9 from '../assets/4blog9.jpg';






const blogs = [
  {
    id: '1',
    title: 'Empowering Youth and Single Mothers To Embrace Entrepreneurship',
    image: BlogMain,
    description:
      'A recent session in Mageragere sector brought together youth and single mothers to explore new opportunities in entrepreneurship and development...',
    fullContent: [
      <p key="p1">
        We visited Mageragere Sector where we gathered with young people and single mothers to discuss the powerful role of education and training 
        in breaking the cycle of poverty. AspireBridgeRwanda is proud to support this community by providing tools and knowledge that enable 
        sustainable development and entrepreneurship.
      </p>,
      <p key="p2">
        The session focused on practical skills and opportunities available to these resilient groups. Discussions highlighted how entrepreneurship 
        can empower individuals to create their own paths, generate income, and contribute meaningfully to their families and communities.
      </p>,
      <div key="training-images" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <img src={BlogTraining1} alt="Training Session 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
        <img src={BlogTraining2} alt="Training Session 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
      </div>,
      <p key="p3">
        Participants shared inspiring stories of how previous training sessions helped them develop small businesses, from tailoring to mobile repair services. 
        These success stories fuel motivation and illustrate the impact of knowledge combined with determination.
      </p>,
      <p key="p4">
        Building community support was another key theme of the day. By fostering networks where people encourage and help each other, AspireBridgeRwanda 
        strengthens the foundation for lasting growth and collaboration.
      </p>,
      <div key="community-images" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <img src={BlogCommunity1} alt="Community 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
        <img src={BlogCommunity2} alt="Community 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
      </div>,
      <p key="p5">
        One participant reflected: “The knowledge and confidence I gained here have opened doors I never thought possible. Now, I’m taking steps to build a better future.” 
        This spirit of empowerment is what drives us forward.
      </p>,
      <p key="p6">
        The focus remains on delivering practical training and mentorship, ensuring every individual leaves with actionable skills that can be immediately applied 
        to improve their livelihoods.
      </p>,
      
      <p key="p7">
        We look forward to continuing these sessions in Mageragere sector and beyond, expanding our reach and impact in Rwanda’s communities.
      </p>,
      <p key="p8">
        Together, through education and empowerment, we are building brighter future.
      </p>,
      <h2 key="session-title" className="text-xl font-semibold mt-10 mb-4">Session Highlights</h2>,
      <div key="session-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <img src={BlogSession1} alt="Session 1" className="rounded-lg shadow-md w-full h-40 object-cover" />
        <img src={BlogSession2} alt="Session 2" className="rounded-lg shadow-md w-full h-40 object-cover" />
        <img src={BlogSession3} alt="Session 3" className="rounded-lg shadow-md w-full h-40 object-cover" />
        <img src={BlogSession4} alt="Session 4" className="rounded-lg shadow-md w-full h-40 object-cover" />
      </div>,
    ],
  },

  {
    id: '2',
    title: 'Training Youth to Create Jobs from Community Opportunities',
    image: Blog1,
    description:
      'We’ve equipped young people with the skills to identify community-based opportunities and build small businesses through group savings and collaboration...',
    fullContent: [
      <p key="p1">
        In our continuous mission to empower youth, we recently held a training session aimed at equipping young people with the skills to identify job-creation 
        opportunities within their own communities. From recognizing unused infrastructure to addressing local needs, participants learned to think creatively 
        and act decisively.
      </p>,
           <div key="community-images" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <img src={Blog2} alt="Community 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
        <img src={Blog3} alt="Community 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
      </div>,
      <p key="p2">
        A key component of the training was financial literacy. Participants were taught how to save small amounts of money collectively, forming savings groups 
        that serve as a launchpad for starting small businesses. This model encourages accountability, teamwork, and self-reliance.
      </p>,
      <p key="p3">
        Through group discussions and mentorship, the youth explored how even the most limited resources can be transformed into capital when approached with 
        the right mindset and collaboration. Ideas ranged from farming cooperatives to community repair services.
      </p>,
      <p key="p4">
        One young participant noted, “I never knew that what we have in our community can be the start of a business. Now, I see the value in what’s around us.” 
        This shift in perspective is exactly what AspireBridgeRwanda seeks to cultivate.
      </p>,
             <div key="community-images" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <img src={Blog4} alt="Community 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
        <img src={Blog5} alt="Community 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
      </div>,
      <p key="p5">
        The training concluded with group planning exercises where participants outlined actionable steps to launch their own small-scale enterprises. Many left 
        the session with renewed energy, determination, and a support network of peers committed to shared success.
      </p>,
      <p key="p6">
        As we expand our reach, we remain committed to empowering Rwandan youth to create their own paths forward—by tapping into their surroundings, working 
        together, and believing in the power of small beginnings.
      </p>,
    ],
  },
  {
  id: '3',
  title:'From Ideas to Impact: Empowering Rwanda’s Youth and Young Mothers',
  image: Tblog1,
  description:
    'We continue to train youth and young mothers on how to transform simple ideas into income-generating businesses—building confidence, embracing innovation, and creating sustainable futures from local opportunities.',
  fullContent: [
    <p key="p1">
      At <strong>AspireBridge Rwanda</strong>, we believe that real change begins at the grassroots—with young people who dare to dream and act. Our recent
      initiative focused on training both youth and young mothers on how to <strong>identify and build small businesses</strong> from opportunities within
      their own communities.
    </p>,

    <p key="p2">
      These trainings were designed to spark a mindset shift: to help participants see that <strong>even the simplest idea can become a source of income</strong>.
      Through practical guidance and real-world examples, they learned how to develop a business idea step-by-step—from conception to execution—by leveraging
      the resources they already have.
    </p>,

    <div key="images-1" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Tblog1} alt="Youth Training 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Tblog2} alt="Youth Training 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <p key="p3">
      A major emphasis was placed on <strong>confidence, innovation, and self-reliance</strong>. Many participants had never thought of themselves as entrepreneurs,
      but through these sessions, they discovered that courage and creativity are more valuable than capital. They were encouraged to embrace risk, think
      differently, and take ownership of their future.
    </p>,

    <p key="p4">
      Financial literacy was another key component. Participants were introduced to the concept of <strong>group savings</strong> as a practical tool to launch
      businesses with limited resources. They learned how to work together, pool money, and create accountability structures that promote discipline and long-term success.
    </p>,

    <div key="images-2" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Tblog3} alt="Community Projects 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Tblog4} alt="Community Projects 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <p key="p5">
      Through group discussions, role-play, and mentorship, participants explored how to turn local needs—such as agriculture, tailoring, or community services—
      into sustainable businesses. The atmosphere was filled with excitement, purpose, and hope.
    </p>,

    <p key="p6" className="italic">
      “We were taught how ideas can generate income, how to grow those ideas step by step, and how to believe in ourselves. I now see that what we have in our community
      is not a limitation—it’s an opportunity.” — Participant testimonial
    </p>,

    <p key="p7">
      The training ended with collaborative business planning sessions, where each group outlined tangible next steps for launching their ventures. Many left not only
      with a plan—but with a renewed sense of direction, empowerment, and a peer support network.
    </p>,

    <p key="p8">
      At AspireBridge Rwanda, our mission continues: <strong>to help young people and young mothers create brighter futures</strong> by turning local ideas into thriving
      enterprises. Because lasting impact starts with small beginnings—and with the courage to take the first step.
    </p>,
        <h2 key="session-title" className="text-xl font-semibold mt-10 mb-4">Session Highlights</h2>,
      <div key="session-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <img src={Tblog5} alt="Session 1" className="rounded-lg shadow-md w-full h-40 object-cover" />
        <img src={Tblog6} alt="Session 2" className="rounded-lg shadow-md w-full h-40 object-cover" />
        <img src={Tblog7} alt="Session 3" className="rounded-lg shadow-md w-full h-40 object-cover" />
        <img src={Tblog1} alt="Session 4" className="rounded-lg shadow-md w-full h-40 object-cover" />
      </div>,
  ],
},

{
  id: '4',
  title: 'Empowering Youth, Young Mothers and women Through Business Model Canvas Training',
  image: Fblog7,
  description:
    'AspireBridge Rwanda equips youth and young mothers with the skills to design impactful businesses using the Business Model Canvas—a powerful tool for creating value-driven ventures and sustainable futures.',
  fullContent: [
    <p key="p1">
      At <strong>AspireBridge Rwanda</strong>, we believe that entrepreneurship is about solving real problems with practical, local solutions. In our latest
      training, we introduced youth and young mothers to the <strong>Business Model Canvas</strong>—a strategic tool that helps visualize and build business models
      with clarity and purpose.
    </p>,

    <p key="p2">
      The <strong>Business Model Canvas</strong> is a one-page framework with nine essential sections that describe how a business creates, delivers, and captures
      value. This training empowered participants to turn simple ideas into structured, impactful, and income-generating ventures.
    </p>,

    <div key="images-1" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Fblog1} alt="Training 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Fblog2} alt="Training 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <h2 key="bmc-title" className="text-xl font-semibold mt-6 mb-2">What Participants Learned</h2>,

    <ul key="bmc-points" className="list-disc list-inside space-y-2 mb-6">
      <li><strong>Customer Segments:</strong> Identifying different groups with distinct needs and behaviors.</li>
      <li><strong>Value Propositions:</strong> Understanding the value delivered to each customer segment.</li>
      <li><strong>Channels:</strong> Exploring how value is delivered—online, face-to-face, or via partnerships.</li>
      <li><strong>Customer Relationships:</strong> Building trust, loyalty, and consistent communication.</li>
      <li><strong>Revenue Streams:</strong> Identifying how the business will generate income.</li>
      <li><strong>Key Resources:</strong> Outlining critical assets needed to operate the business.</li>
      <li><strong>Key Activities:</strong> Defining the most important things the business must do.</li>
      <li><strong>Key Partnerships:</strong> Recognizing strategic alliances that support the business model.</li>
      <li><strong>Cost Structure:</strong> Understanding major costs and how they affect pricing and sustainability.</li>
    </ul>,

    <p key="p3">
      Participants left the session with a structured view of how businesses operate, and how even small ideas—when properly designed—can scale into thriving
      ventures. Through real-world examples and interactive discussions, they developed business models tailored to their community's needs.
    </p>,

    <p key="p4">
      This session was more than a workshop—it was a transformation. Participants gained <strong>confidence</strong>, <strong>clarity</strong>, and <strong>community</strong>,
      equipping them to turn opportunity into impact.
    </p>,

    <div key="images-2" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Fblog8} alt="Canvas Workshop 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Fblog4} alt="Canvas Workshop 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <p key="p5" className="italic">
      “I used to think business was only for people with money or experience. But now I know, with a simple tool like this and some courage, we can build something
      powerful from what we already have.” — Participant testimonial
    </p>,

    <p key="p6">
      Looking ahead, we believe this training will foster <strong>innovation, financial independence, and long-term community resilience</strong>. AspireBridge
      Rwanda remains committed to nurturing ideas and turning them into impactful realities.
    </p>,

    <h2 key="session-title" className="text-xl font-semibold mt-10 mb-4">Session Highlight</h2>,

    <div key="session-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      <img src={Fblog5} alt="Session 1" className="rounded-lg shadow-md w-full h-40 object-cover" />

      <img src={Fblog7} alt="Session 3" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={Fblog8} alt="Session 4" className="rounded-lg shadow-md w-full h-40 object-cover" />
    </div>
  ]
}

];

export default blogs;
