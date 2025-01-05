import dbConnect from "@/lib/config/mongodb"
import ApplicationSchema from "@/lib/backend/models/application";
import jwt from 'jsonwebtoken';
export const ApplicationController = {

    async apply(req) {
        try {
            await dbConnect()
            const {
                fullName,
                email,
                portfolioURL,
                coverLetter,
                jobTitle,
                jobSubTitle,
                jobType,
                jobCategory,
                jobExperience,
                jobDegree,
                jobOfferedSalary,
                jobLocation,
                jobDescription,
                jobKeyResponsibilities,
                jobProfessionalSkills,
                jobCompanyName,
                rhEmail
            } = await req.json()

            const existingUserForSameJob = await ApplicationSchema.findOne({
                email: email,
                jobTitle: jobTitle,
                jobCompanyName: jobCompanyName
            });

            if (existingUserForSameJob) {
                return { message: "You have already applied for this job.", status: 400 };
            }
            const newApply = await ApplicationSchema({
                fullName,
                email,
                portfolioURL,
                coverLetter,
                jobTitle,
                jobSubTitle,
                jobType,
                jobCategory,
                jobExperience,
                jobDegree,
                jobOfferedSalary,
                jobLocation,
                jobDescription,
                jobKeyResponsibilities,
                jobProfessionalSkills,
                jobCompanyName,
                rhEmail
            });

            const apply = await newApply.save()
            return { message: "success", status: 200, apply }
        } catch (error) {

            return { message: "An error occurred during Application.", status: 500, error };

        }
    },

    async getUserApplication(token) {
        try {
            await dbConnect()
            const secretKey = process.env.JWT_SECRET_KEY;
            const decoded = jwt.verify(token, secretKey);
            const getEmail = decoded.email;
            const application = await ApplicationSchema.find({ email: getEmail })
            return { message: "success", status: 200 , application }
        } catch (error) {
            return { message: "An error occurred during geting application.", status: 500, error };
        }
    }

}