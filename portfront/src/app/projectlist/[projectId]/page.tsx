import { GetServerSideProps } from "next";
import { getData } from "@/data/projectData";

export default async function ProjectPage({ params }: { params: { id : number}}) {
    const projectData = await getData(params.id)
    return (
        <div className="project-main">
            <h1> {} </h1>
            <h2> Website </h2>
            <div className="project-tags">
                <text> HTML </text>
                <text> PHP </text>
                <text> JavaScript </text>
                <text> Experimental </text>
            </div>
            <h3> Description </h3>
            <p> In a world where bending elements is the norm and the fate of nations hangs in the balance, 
                there's Aang, the reluctant Avatar who would rather ride on penguin sledding than save the world. 
                Accompanied by his determined friends Katara and Sokka, who's more interested in his next meal than 
                global crises, they embark on a hilariously chaotic journey. Enter Zuko, the angsty prince with a 
                perpetual bad hair day, determined to capture Aang but constantly thwarted by his own clumsiness. 
                And then there's Toph, the tough earthbender with a knack for sarcasm and bending the rules, quite literally. 
                From accidentally setting Sokka's pants on fire to Katara's waterbending mishaps, their adventures are a comedy of 
                errors. Yet, amidst the laughs, Aang must face his destiny, even if it means dealing with his fear of flying 
                lemurs and confront the Fire Nation's fiercest foes with a goofy grin. 
                <br/><br/> This is totally not written by ChatGPT </p>
        </div>
    );
}

/**
export const getServerSideProps : GetServerSideProps = async ({ query }) => {
    const { id } = query;
    return {
        props: {
            project: projectData.filter(
                (project) => project.id === parseInt(id as string),
            )[0],
        },
    }
}
 */
