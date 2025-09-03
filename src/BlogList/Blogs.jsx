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

import Fblog10 from '../assets/4blog8.jpg';
import Fblog11 from '../assets/4blog9.jpg';
import Fblog12 from '../assets/4blog8.jpg';
import Fblog13 from '../assets/next1.jpg';
import Fblog14 from '../assets/next2.jpg';
import Fblog15 from '../assets/edit.jpg';
import Fblog16 from '../assets/edit2.jpg';

import Ablog1 from '../assets/a1.jpg';
import Ablog2 from '../assets/A2.jpg';
import Ablog3 from '../assets/A3.jpg';
import Ablog4 from '../assets/A4.jpg';
import Ablog5 from '../assets/A5.jpg';


import BlogImage1 from '../assets/blog1.jpg';

import BlogImage2 from '../assets/blog2.jpg';

import BlogImage3 from '../assets/blog3.jpg';

import BlogImage4 from '../assets/blog4.jpg';

import BlogImage5 from '../assets/blog5.jpg';

import BlogImage6 from '../assets/blog6.jpg';

import BlogImage7 from '../assets/blog7.jpg';

import BlogImage8 from '../assets/blog8.jpg';

import Tech1 from '../assets/tech1.jpg';

import Tech2 from '../assets/tech2.jpg';

import Tech3 from '../assets/tech3.jpg';

import Tech4 from '../assets/tech4.jpg';

import Tech5 from '../assets/tech5.jpg';

import Tech6 from '../assets/tech6.jpg';

import Tech7 from '../assets/tech7.jpg';

import Tech8 from '../assets/tech8.jpg';
import Tech9 from '../assets/tech9.jpg';










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
    </div>,

  
    <p key="p7" className="mt-10">
      <strong>The journey didn’t end there.</strong> The following day, we continued the training with a deeper dive into the real-world application of the Business Model Canvas. Participants returned energized and ready to refine their models with new perspectives and peer feedback.
    </p>,

    <p key="p8">
      The session emphasized <strong>validation and iteration</strong>. Participants presented their business models to small groups, received constructive feedback, and iterated on their canvas to reflect improved ideas and stronger value propositions.
    </p>,

    <div key="images-next-day" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Fblog13} alt="Next Day Workshop 1" className="rounded-lg shadow-md w-full h-92 object-cover" />
      <img src={Fblog14} alt="Next Day Workshop 2" className="rounded-lg shadow-md w-full h-92 object-cover" />
    </div>,

    <h2 key="group-work-title" className="text-xl font-semibold mt-6 mb-2">Collaborative Learning in Action</h2>,

    <p key="p9">
      Groups worked together to simulate customer interviews, map out user journeys, and rethink their revenue models. This hands-on approach helped deepen their understanding of customer needs and business sustainability.
    </p>,

    <ul key="next-day-points" className="list-disc list-inside space-y-2 mb-6">
      <li><strong>Prototype Testing:</strong> Simulated real-life use of the proposed solution for better market fit.</li>
      <li><strong>Peer-to-Peer Critiques:</strong> Open feedback sessions that boosted model clarity and confidence.</li>
      <li><strong>Pitch Practice:</strong> Participants practiced concise and compelling presentations of their models.</li>
    </ul>,

    <p key="p10">
      By the end of the second day, many participants had transformed rough concepts into polished business ideas, ready for incubation or community piloting.
    </p>,

    <div key="images-final" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Fblog15} alt="Presentation 1" className="rounded-lg shadow-md w-full h-92 object-cover" />
      <img src={Fblog16} alt="Group Collaboration" className="rounded-lg shadow-md w-full h-92 object-cover" />
    </div>,

    <p key="p11" className="italic">
      “After presenting my idea and getting feedback, I feel more prepared than ever. This training showed me I don’t have to wait for perfect conditions—I can start today.” — Participant reflection
    </p>,

    <p key="p12">
      AspireBridge Rwanda’s commitment to hands-on, inclusive, and practical training continues to inspire youth and women to dream boldly and execute smartly.
    </p>,

    
  ]
},{
  id: '5',
  title: 'Empowering Women and Youth Through Pig and Chicken Farming',
  image: Ablog1,
  description:
    'AspireBridge Rwanda is training women and youth in profitable pig and poultry farming—transforming local knowledge into sustainable income and self-reliance.',
  fullContent: [
    <p key="p1">
      At <strong>AspireBridge Rwanda</strong>, we are dedicated to building sustainable futures by equipping communities—especially women and youth—with practical, income-generating skills. Our latest training series focused on <strong>pig and chicken farming</strong>, offering hands-on experience to help participants turn everyday opportunities into thriving agribusiness ventures.
    </p>,

    <p key="p2">
      Participants were introduced to the fundamentals of raising <strong>pigs and chickens</strong>, including housing, feeding, breeding, and health management. The training highlighted how small-scale poultry and piggery projects, when well-managed, can become <strong>highly profitable with low startup costs</strong>. For many, this was the first step toward seeing farming not just as survival, but as a smart business strategy.
    </p>,

    <div key="images-1" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Ablog5} alt="Pig and Chicken Training 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Ablog2} alt="Pig and Chicken Training 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <p key="p3">
      The program didn’t just teach farming techniques—it encouraged a mindset of <strong>entrepreneurship, innovation, and resilience</strong>. Participants were challenged to view their surroundings differently—to see pigs and chickens not as everyday animals, but as valuable assets for income, food security, and community growth.
    </p>,

    <p key="p4">
      Beyond meat production, participants learned about multiple income streams from pigs and poultry: <strong>eggs, manure for fertilizer, breeding stock, piglets, and value-added products like smoked meat or packaged eggs</strong>. This approach enables farmers to maximize profits while building diverse, resilient businesses.
    </p>,

    <div key="images-2" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Ablog3} alt="Hands-on Training 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Ablog4} alt="Hands-on Training 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <p key="p5">
      A key element of the training was promoting <strong>cooperative models and group savings</strong>. Participants formed savings groups, developed business plans, and explored ways to support each other through shared resources and community accountability—laying the groundwork for collective success.
    </p>,

    <p key="p6" className="italic">
      “I used to think raising chickens was only for food. Now I know it can be a business that provides for my family and helps others too.” — Participant testimonial
    </p>,

    <p key="p7">
      The sessions ended with powerful presentations of participant-led business plans. Each idea reflected creativity, determination, and a strong belief in what’s possible. As they left, every trainee carried more than knowledge—they carried hope, strategy, and a sense of ownership over their future.
    </p>,

    <p key="p8">
      AspireBridge Rwanda remains committed to building <strong>self-sustaining livelihoods</strong> through agriculture. With each initiative, we aim to spark transformation—because when women and youth are empowered with skills and confidence, entire communities rise.
    </p>,

    <h2 key="session-title" className="text-xl font-semibold mt-10 mb-4">Session Highlights</h2>,
    <div key="session-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      <img src={Ablog2} alt="Poultry Training" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={Ablog3} alt="Pig Farming Workshop" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={Ablog5} alt="Team Activity" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={Ablog3} alt="Business Planning Session" className="rounded-lg shadow-md w-full h-40 object-cover" />
    </div>,
  ],
},
{
  id: '6',
  title: 'Sewing Hope: A Journey of Empowerment Through Tailoring Skills',
  image: BlogImage1,
  description:
    'AspireBridge Rwanda visits tailoring students to encourage skill-building, share stories, and inspire lasting change through social and economic empowerment.',
  fullContent: [
    <section key="intro" className="space-y-4">
      <p>
        At <strong>AspireBridge Rwanda</strong>, we are driven by one mission: to equip the youth and young mothers of Rwanda with practical skills that empower them to take charge
        of their future. Recently, our team had the joy of visiting one of our tailoring students—an incredibly determined young woman who is mastering the craft of sewing with the
        goal of uplifting her life and her community.
      </p>
      <p>
        This field visit was about more than checking on progress; it was a heartfelt moment to connect, reflect, share stories, and celebrate how vocational skills are transforming lives
        from the inside out.
      </p>
    </section>,

    <section key="gallery-1" className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <img src={BlogImage2} alt="Tailoring session in progress" className="rounded-xl shadow-md w-full h-80 object-cover" />
      <img src={BlogImage3} alt="AspireBridge Rwanda interacting with the student" className="rounded-xl shadow-md w-full h-80 object-cover" />
    </section>,

    <section key="personal-story" className="space-y-4">
      <p>
        During the session, our student shared her story before joining AspireBridge. “I didn’t know where I was headed,” she admitted. “I had ideas but no way to make them real.
        I had dreams but no skills to turn them into something meaningful.” Now, thanks to our tailoring training program, she’s on a journey of both personal and professional growth.
      </p>
      <blockquote className="italic border-l-4 border-blue-500 pl-4 text-gray-600">
        “Now, every stitch I make reminds me I’m sewing my future—one where I own a business, inspire other girls, and make my family proud.”
      </blockquote>
    </section>,

    <section key="impact" className="space-y-4 mt-6">
      <p>
        Our conversation also delved into what she hopes to achieve after graduating. She dreams of starting her own fashion workshop, employing other girls from her village,
        and eventually teaching others. She believes that her skill is not just a means of making money, but a way to bring dignity and confidence to women in her community.
      </p>
      <p>
        These conversations are a vital part of our program because they reaffirm our mission: <strong>to build lasting change through localized, skill-based empowerment</strong>.
        From tailoring and agriculture to entrepreneurship and tech, AspireBridge Rwanda is creating future-ready changemakers.
      </p>
    </section>,

    <section key="gallery-2" className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <img src={BlogImage4} alt="Sewing tools and training equipment" className="rounded-xl shadow-md w-full h-80 object-cover" />
      <img src={BlogImage5} alt="Student focusing on garment stitching" className="rounded-xl shadow-md w-full h-80 object-cover" />
    </section>,

    <section key="stats-and-highlights" className="space-y-6">
      <h2 className="text-2xl font-semibold">📈 Program Highlights</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Over <strong>150 young women</strong> enrolled in tailoring and vocational training across 4 districts</li>
        <li><strong>92% completion rate</strong> of basic tailoring modules within 8 weeks</li>
        <li>Includes training in sewing machine operations, measurements, pattern creation, and quality finishing</li>
        <li>Supplemented by sessions on <strong>entrepreneurship, bookkeeping, and customer relations</strong></li>
        <li>Follow-up and mentorship system with local community leaders and volunteers</li>
      </ul>
    </section>,

    <section key="social-proof" className="mt-10">
      <p>
        Every time we visit our students, we are reminded that skills are powerful—but belief and support are even more powerful. Our tailoring student is now a role model in her
        area, and her story is inspiring others to enroll and start their own journey with AspireBridge Rwanda.
      </p>
      <p className="mt-4 font-semibold">
        With a needle and thread, she is not just sewing clothes—<strong>she is stitching a brighter future</strong>.
      </p>
    </section>,

    <h2 key="section-title" className="text-xl font-semibold mt-10 mb-4">📸 Captured Moments from the Visit</h2>,
    <div key="session-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      <img src={BlogImage6} alt="Student Portrait" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={BlogImage7} alt="Measuring Fabric" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={BlogImage8} alt="Sewing Demo" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={BlogImage3} alt="Group Discussion" className="rounded-lg shadow-md w-full h-40 object-cover" />
    </div>,

    <section key="call-to-action" className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow mt-8">
      <h3 className="text-lg font-semibold mb-2 text-blue-700">🌍 Want to Support?</h3>
      <p className="text-gray-700">
        AspireBridge Rwanda is actively seeking partners, donors, and volunteers to support our skills-based empowerment programs. Whether you're a professional tailor,
        mentor, or simply passionate about youth development—<strong>you can make a difference</strong>.
      </p>
     
    </section>,
  ],
},
{
  id: '7',
  title: 'Empowering Women and Youth Through Digital Literacy',
  image:Tech1,
  description:
    'AspireBridge Rwanda is equipping women, youth, and young mothers with digital literacy skills—unlocking access to opportunities, services, and self-reliance in a technology-driven world.',
  fullContent: [
    <p key="p1">
      At <strong>AspireBridge Rwanda</strong>, we believe empowerment begins with knowledge and the ability to adapt to change. In today’s world, <strong>digital literacy</strong> is no longer a luxury but a necessity. Our recent initiative focused on training women, youth, and young mothers in essential digital skills—equipping them to harness technology for <strong>education, entrepreneurship, and sustainable livelihoods</strong>.
    </p>,

    <p key="p2">
      Through this program, participants gained hands-on experience in <strong>basic computer skills, internet navigation, online communication, and productivity tools</strong>. More than just technical skills, the training emphasized the importance of digital confidence—helping participants see technology as a bridge to opportunities and an enabler of self-reliance.
    </p>,

    <div key="images-1" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Tech2} alt="Digital Training 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Tech3} alt="Digital Training 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <p key="p3">
      The program also encouraged participants to adopt a mindset of <strong>innovation and problem-solving</strong>. They were challenged to rethink how digital tools can be applied in everyday life—from running small businesses and accessing healthcare information to connecting with global knowledge resources.
    </p>,

    <p key="p4">
      Beyond personal use, participants discovered how digital literacy can open <strong>multiple pathways to income</strong>. These included <strong>freelancing, e-commerce, digital marketing, online tutoring, and remote services</strong>. By mastering these tools, they are better positioned to compete in both local and international job markets.
    </p>,

    <div key="images-2" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <img src={Tech4} alt="Hands-on Digital Session 1" className="rounded-lg shadow-md w-full h-72 object-cover" />
      <img src={Tech5} alt="Hands-on Digital Session 2" className="rounded-lg shadow-md w-full h-72 object-cover" />
    </div>,

    <p key="p5">
      Collaboration was another cornerstone of the program. Participants formed <strong>digital savings groups and peer-learning circles</strong>, ensuring that knowledge-sharing and support systems continue long after the training. This community-driven approach fosters accountability and collective progress.
    </p>,

    <p key="p6" className="italic">
      “Before this training, I only used my phone for calls and social media. Now I know it can be a tool for learning, earning, and supporting my family.” — Participant testimonial
    </p>,

    <p key="p7">
      The training concluded with inspiring presentations of <strong>digital business ideas</strong> created by participants. From e-commerce startups to online tutoring initiatives, their projects reflected creativity, resilience, and a strong belief in the power of technology to change lives. Each graduate left with more than just digital skills—they carried a <strong>roadmap for the future</strong>.
    </p>,

    <p key="p8">
      At AspireBridge Rwanda, our mission is to build <strong>self-sustaining communities</strong> by preparing individuals for the realities of a digital economy. With every program, we are not just teaching skills—we are nurturing confidence, independence, and hope. Because when women and youth are digitally empowered, entire communities thrive.
    </p>,

    <h2 key="session-title" className="text-xl font-semibold mt-10 mb-4">Session Highlights</h2>,
    <div key="session-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      <img src={Tech6} alt="Digital Skills Training" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={Tech7} alt="Online Collaboration Workshop" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={Tech8} alt="Youth Learning Session" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src={Tech9} alt="Project Presentation" className="rounded-lg shadow-md w-full h-40 object-cover" />
    </div>,
  ],
}




];

export default blogs;
