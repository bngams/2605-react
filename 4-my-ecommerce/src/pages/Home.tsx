import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();
    
    function scrollTo(elementId: string) {
        // useRef instead...
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
    }

    function goTo(path: string) {
        navigate(path);
    }

    return (
        <>
            <div id="hero" className="flex flex-col items-center gap-4">
                <h1>My first React App</h1>
                <img src="/react.svg" alt="React" />
                <p>My super brand!</p>
                <Button onClick={() => goTo("/products")}>Buy Products</Button>
                <Button onClick={() => scrollTo("intro")}>Continue</Button>
            </div>
            <div id="intro" className="mt-20">
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda neque eligendi dicta quam ad sint quod, iusto incidunt facere nobis rem magnam, maxime nesciunt vitae consequuntur, quisquam cumque ex suscipit.
               Harum, expedita quae accusantium impedit tempore, laboriosam qui cum a inventore nemo aut doloremque. Ducimus praesentium voluptatum, totam eveniet delectus, consectetur rem, ullam doloremque tempore fugiat est pariatur officiis blanditiis!
               Beatae nemo molestiae quam porro voluptatum quo facilis reiciendis magni dolorem aliquid deleniti, fuga necessitatibus suscipit, asperiores incidunt dicta eum libero veritatis cupiditate. Corrupti maxime ut officiis incidunt exercitationem nisi.
               Aspernatur laborum nobis aperiam! Deleniti ipsum perferendis fugiat rerum ad amet maxime, vel dolorum itaque ratione ut expedita eos nisi quidem cupiditate dignissimos iste? Aperiam dicta facere deserunt atque enim.
               Eos excepturi, tempora itaque eius dolore ipsum consequuntur assumenda aspernatur, voluptate quaerat in reiciendis voluptatibus repellat dignissimos odit. Quae laudantium voluptatem totam consequatur! Distinctio adipisci nulla exercitationem dolorum accusantium explicabo.</p>
            </div>
        </>
    );
}
export default Home;