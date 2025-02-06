import { db } from "../prisma";
import { inngest } from "./client";


export const generateIndustryINsights = inngest.createFunction(
    { name: "Generate Industry Insights"},
    { cron: "0 0 * * 0"},
    async ({step}) => {
        const industries = await step.run("Fetch industries", async () => {
            return await db.industryInsight.findMany({
                select: { industry: true},
            })
        });
        for(const {industry} of industries){
            
        }
    }
);

// * * * * * = every minute
//0 * * * * = every hour at minute 0
//0 0 * * * = Daily at midnight
//0 0 * * 0 = Weekly on sunday at midnight
// 0 0 1 1 * = Yearly on jan 1st midnight