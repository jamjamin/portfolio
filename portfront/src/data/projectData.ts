export interface ProjectData {
    id : number
    projectTitle: string,
    projectType: string,
    projectTags: ProjectTags
    projectDesc: string
}

export interface ProjectTags {
    languages: string[],
    technologies: string[]
}

export const projectData: ProjectData[] = [
    {
        id : 1,
        projectTitle: "Project 1",
        projectType: "Website",
        projectTags: {
            languages: ["Javascript", "HTML", "CSS"],
            technologies: ["ReactJS"]
        },
        projectDesc : "In a world where bending elements is the norm and the fate of nations hangs in the balance, there's Aang, the reluctant Avatar who would rather ride on penguin sledding than save the world. Accompanied by his determined friends Katara and Sokka, who's more interested in his next meal than global crises, they embark on a hilariously chaotic journey. Enter Zuko, the angsty prince with a perpetual bad hair day, determined to capture Aang but constantly thwarted by his own clumsiness. And then there's Toph, the tough earthbender with a knack for sarcasm and bending the rules, quite literally. From accidentally setting Sokka's pants on fire to Katara's waterbending mishaps, their adventures are a comedy of errors. Yet, amidst the laughs, Aang must face his destiny, even if it means dealing with his fear of flying lemurs and confront the Fire Nation's fiercest foes with a goofy grin. This is totally not written by ChatGPT"
    },
    {
        id : 2,
        projectTitle: "Project 2",
        projectType: "Mobile Application",
        projectTags: {
            languages: ["Dart"],
            technologies: ["Flutter"]
        }, 
        projectDesc: "In a world where bending elements is the norm and comedy is the unexpected guest, Aang, the carefree Avatar, leads a band of misfit heroes on an uproarious quest for peace. Katara, the ever-optimistic waterbender, tries to keep everyone on track while Sokka, the self-proclaimed comedic genius, can't seem to stop slipping on banana peels (metaphorically speaking). Enter Zuko, the brooding prince with a flair for dramatic entrances and an uncanny ability to accidentally set his own ship on fire. And let's not forget Toph, the feisty earthbender who sees through the world with the clarity of a sarcastic hawk. Together, they stumble through slapstick battles and pratfall-filled escapades, all while trying to save the world from the Fire Nation's not-so-menacing threats. Will they succeed? Well, with Aang riding penguin sledding into battle, anything is possible in this sidesplitting saga of friendship and bending gone awry. This is totally not written by ChatGPT"
    },
    {
        id : 3,
        projectTitle: "Project 3",
        projectType: "Computer Game",
        projectTags: {
            languages: ["Java"],
            technologies: ["JavaDB"]
        }, 
        projectDesc: "Sudokuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
    }
]

export function getData(id : number) {
    return projectData[id - 1];
}