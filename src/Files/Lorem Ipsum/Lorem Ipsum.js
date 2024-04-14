import { LoremIpsum } from "react-lorem-ipsum";

export default function PersonalLoremIpsum(prop) {
    // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
    return(
        <div>
            <h1>{prop.HeaderName}</h1>
            <LoremIpsum p={30} />
        </div>
    ) 
  }