import { ApplicationController } from "@/lib/backend/controllers/applicationController";
import { NextResponse } from "next/server";

export async function GET(req){
  
    try {
        const authHeader = req.headers.get('authorization');
        const token = authHeader ? authHeader.split(' ')[1] : null;

        if (!token) {
            return NextResponse.json({ message: 'No Token Provided'}, { status: 401 });
        }
        const response = await ApplicationController.getUserApplication(token);
        return NextResponse.json(response , {status:200});  
    } catch (error) {
        return NextResponse.json({message : 'An error occurred while processing your request. '})  
    }
}