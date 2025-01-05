import { ApplicationController } from "@/lib/backend/controllers/applicationController";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const response = await ApplicationController.apply(req);
        return NextResponse.json(response , {status:200});
        
    } catch (error) {
        return NextResponse.json({message : 'An error occurred while processing your request. '})
        
    }
}