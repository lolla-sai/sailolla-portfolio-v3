import type { Route } from "./+types/project";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Project Blog" },
        { name: "description", content: "Hi, I am Sai Lolla" },
    ];
}

// Example usage
const markdownContent = `
![Maslo Icon](https://masloconsulting.com/wp-content/uploads/2023/01/Maslo-1536x559.png)

# Maslo Consulting: HR Bot

The official HR-POSH consultation tool by Maslo Consultation

## Features

-   Chatbot to answer all your posh related queries
-   Collection of templates for various stages of the POSH process
-   Case Management for HR professionals

## Usage (with docker)
To build the docker image

\`docker build -t masloconsultingposh .\`

To run the docker container (Use -d only if you need to run in detached mode)

\`docker run --env-file src/masloconsulting-backend/.env --name poshconsulting-container -p 8000:8000 masloconsultingposh -d\`

To remove the container

\`docker rm poshconsulting-container\`

To execute a command on the container

\`docker exec -it poshconsulting-container python src/masloconsulting-backend/manage.py createsuperuser\`

`;

export default function ProjectBlog() {
    return (
        <main>
            <NavBar />

            <p className="mt-8 mx-auto prose">
                {/* markdown rendering starts */}
                <div className="mx-4">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {markdownContent}
                    </ReactMarkdown>
                </div>
            </p>
        </main>
    );
}
