import React from 'react'
import VisionContent from './VisionContent'
import FocusArea from './FocusArea'
import visionImage1 from '../assets/vision-1.jpg'
import visionImage2 from '../assets/vison-2.jpg'


function VisionSection() {
  return (
    <div className=' p-8 flex flex-col gap-10 ' >
        <VisionContent
        img={visionImage1}
        heading={"Empowering Youth & Women for a Brighter Future"}
        paragraph={"At AspireBridge Rwanda we are committed to reducing poverty by equipping young people and women with the skills, resources, and opportunities they need to thrive. Through education, entrepreneurship, and advocacy, we are bridging the gap between potential and success."}
        />
        <FocusArea
        img={visionImage2}
        heading={"AspireBridge Rwanda"}
        headings={"our Focus area"}
        listItems={[
          "Youth Empowerment",
          "Women’s Economic Empowerment",
          "Advocacy Against Gender-Based Violence",
          "Education & Training"
        ]}
        />
    </div>
  )
}

export default VisionSection