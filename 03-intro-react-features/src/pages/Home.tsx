import Greeting from "@/components/Greeting";
import { Button } from "@/components/ui/button";

function Home() {
    return (
        <div className="container">
            <Greeting  name="React" />
            <Button variant="outline">Click Me</Button>
        </div>
    );
}
export default Home;