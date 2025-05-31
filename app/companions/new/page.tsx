import CompanionForm from "@/components/ui/CompanionForm"
import { redirect } from "next/dist/server/api-utils";






const NewCompanion = async() => {



    return(
        <main className="min-lg:w-1/3 min-md:2-2/3 items-center justify-between">
            <article className="w-full gap-4 flex flex-col">
                <h1>Companion Builder</h1>
                <CompanionForm/>
            </article>    
        </main>
        
        
    )

}


export default NewCompanion


